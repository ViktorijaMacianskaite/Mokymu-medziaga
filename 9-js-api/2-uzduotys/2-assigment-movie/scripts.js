async function fetchMovie(params) {
    const url = `https://api.tvmaze.com/search/shows?q=${params}`; // paieska per search darom dinamiska dali ir idedam reiksme
    const response = await fetch(url);
    const data = await response.json();
    return data; 
}

function onSearchClick() {
    let inputValue = document.getElementById('searchInput').value;

    if (inputValue) {
        fetchMovie(inputValue) 
            .then(data => {
                let moviesContainer = document.querySelector('.movies-container');

                if (moviesContainer) {
                    moviesContainer.innerHTML = "";
                } else {
                    moviesContainer = document.createElement('div');
                    moviesContainer.className = 'movies-container';
                    document.body.appendChild(moviesContainer);
                }

                for (let movie of data) {
                    const movieDiv = document.createElement('div');
                    movieDiv.className = 'movie';

                    movieDiv.innerHTML = `
                        <img src='${movie.show.image ? movie.show.image.medium : "https://via.placeholder.com/210"}'>
                        <h2>${movie.show.name}</h2>
                        <p>Genres: ${movie.show.genres ? movie.show.genres.join(', ') : 'No genres'}</p>
                        <p>${movie.show.summary ? movie.show.summary : 'No description available'}</p>
                    `;

                    moviesContainer.appendChild(movieDiv);
                }
            })
            .catch(error => console.log("Error:", error)); 
    }
}
