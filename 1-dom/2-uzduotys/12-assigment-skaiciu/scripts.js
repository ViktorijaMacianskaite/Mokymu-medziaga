let buttonGuess = document.getElementById("guessButton");

buttonGuess.addEventListener("click", () => {
    let answer = 44;
    let guess = parseInt(document.getElementById("guess").value, 10);

    let wrongCard = document.querySelector(".wrong-guess-card");
    let wrongCardSpan = wrongCard.querySelector("p span");

    let correctCard = document.querySelector(".correct-guess-card");

    let calculatorCard = document.querySelector('.calculator');

    if (guess === answer) {
        wrongCard.style.display = "none";
        correctCard.style.display = "block";
        calculatorCard.style.display = "none";
    } else {
        wrongCard.style.display = "block";
        correctCard.style.display = "none";

        if (guess > answer) {
            wrongCardSpan.textContent = "Mažesnį";
        } else {
            wrongCardSpan.textContent = "Didesnį";
        }
    }
});
