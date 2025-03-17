const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    // 1) Gather input values:
    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0,
    };

    // 2) POST request to JSON Server
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' },
    });

    // 3) Hide the form
    form.style.display = 'none';

    // 4) Create a success message:
    const successMsg = document.createElement('p');
    successMsg.innerText = 'Įrašas sukurtas!';

    // 1) Create a button
    const backButton = document.createElement('button');
    backButton.innerText = 'Atgal';

    // 2) On click, go back one page in history
    backButton.addEventListener('click', () => {
        window.history.back();
    });

    // 3) Append the button to the DOM (e.g., body)
    document.body.appendChild(backButton);

    //    We'll append them to the <body> 
    document.body.appendChild(successMsg);
   
};
// Attach the submit event
form.addEventListener('submit', createPost);
