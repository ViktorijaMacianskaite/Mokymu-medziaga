// 1. Get the `id` value from the URL’s query parameters.
const id = new URLSearchParams(window.location.search).get('id');

// 2. Select the DOM element where we want to display the post details.
const container = document.querySelector('.details');

// 3. Define an async function that fetches and renders post details.
const renderDetails = async () => {
    // 3a. Fetch the post data from the server based on the `id`.
    const res = await fetch('http://localhost:3000/posts/' + id);

    // 3b. Convert the response to JSON (which should be a single post object).
    const post = await res.json();

    // 3c. Create a small HTML snippet (template) to display the post’s `title` and `body`,
    //     plus two buttons: "Atgal i sarasa" and "Ištrinti".
    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    <button id="back-btn">Atgal i sarasa</button>
    <button id="delete-btn">Ištrinti</button>
  `;

    // 3d. Inject the template into the `.details` container on the page.
    container.innerHTML = template;

    // 3e. "Atgal i sarasa" button -> go back one page in the browser history
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', () => {
        window.history.back();
    });

    // 3f. "Ištrinti" button -> send a DELETE request, show success message, add a new "Back" button
    const deleteBtn = document.getElementById('delete-btn');
    deleteBtn.addEventListener('click', async () => {
        // Send a DELETE request to remove the post
        await fetch('http://localhost:3000/posts/' + id, {
            method: 'DELETE',
        });

        // Replace the existing content with a success message and a "Back" button
        container.innerHTML = `
      <p>Įrašas ištrintas sėkmingai!</p>
      <button id="back-btn2">Atgal i sarasa</button>
    `;

        // The new back button also goes back one page
        const backBtn2 = document.getElementById('back-btn2');
        backBtn2.addEventListener('click', () => {
            window.history.back();
        });
    });
};

// 4. Listen for the DOM to be fully loaded before running `renderDetails`.
document.addEventListener('DOMContentLoaded', renderDetails);
