// 1. Listen for the DOM to finish loading before running the code
window.addEventListener('DOMContentLoaded', () => renderPosts());

// 2. Select the container (element) where the posts will be rendered
const container = document.querySelector('.irasai');
const searchFrom = document.querySelector('.search')

// 3. Define the async function that fetches and displays the posts
const renderPosts = async () => {
    // 3a. Set the URI (endpoint) for fetching posts
    let uri = 'http://localhost:3000/posts?_sort=-likes';
    
if (search) {
    uri += `&q=${search}`;
}
    // 3b. Send a GET request to the server
    const res = await fetch(uri);

    // 3c. Parse the response as JSON to get an array of post objects
    const posts = await res.json();

    // 3d. Initialize a variable to build the HTML markup
    let template = '';

    // 3e. Loop through each post and create an HTML snippet
    posts.forEach(post => {
        // Add one block of HTML per post, with title, likes, an excerpt of the body, and a link
        template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} Likes</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="details.html?id=${post.id}">Plačiau</a>
      </div>
    `;
    });

    // 3f. Insert all built HTML into the .irasai container
    container.innerHTML = template;
};


searchFrom.addEventListener('submit', (e)=> {
    e.preventDefault();
    renderPosts(searchFrom.term.value.trim())
})

