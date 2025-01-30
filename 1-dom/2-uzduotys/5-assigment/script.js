let dydisInput = document.getElementById("dydisInput");
let textContainer = document.querySelector(".text");

let btnPaprastas = document.querySelector(".simple");
let btnPastorintas = document.querySelector(".bold");
let btnPasviras = document.querySelector(".italic");

dydisInput.addEventListener("input", () => {
    textContainer.style.fontSize = dydisInput.value + "px";
});

btnPaprastas.addEventListener("click", () => {
    textContainer.style.fontWeight = "normal";
    textContainer.style.fontStyle = "normal";
});

btnPastorintas.addEventListener("click", () => {
    textContainer.style.fontWeight = "bold";
});

btnPasviras.addEventListener("click", () => {
    textContainer.style.fontStyle = "italic";
});
