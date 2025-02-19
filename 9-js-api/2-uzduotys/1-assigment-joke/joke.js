async function clickOnGetJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' } 
        });

        if (!response.ok) {
            throw new Error(`Klaida: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Klaida:', e);
        return { joke: "Nepavyko gauti juokelio." };
    }
}


document.getElementById("getJoke").addEventListener("click", async () => {
    const jokeData = await clickOnGetJoke();
    document.getElementById("joke-value").textContent = jokeData.joke;
});
