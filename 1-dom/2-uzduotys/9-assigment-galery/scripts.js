let images = [
    "images/candles.svg",
    "images/city.svg",
    "images/mountains.svg",
    "images/stalagtits.svg"
];
let currentIndex = 0;

let mainImage = document.getElementById("mainImage");
let thumbnails = document.querySelectorAll(".thumbnails .image");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

function updateImage() {
    mainImage.src = images[currentIndex];

    for (let i = 0; i < thumbnails.length; i++) {
        if (i === currentIndex) {
            thumbnails[i].classList.add("active");
        } else {
            thumbnails[i].classList.remove("active");
        }
    }
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        currentIndex = i;
        updateImage();
    });
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

updateImage();

/***************************** */
// let mygtAtgal = document.querySelector('.selected-image button#back');
// let mygtPirmyn = document.querySelector('.selected-image button#next');
// let cardItemName = 'card-item' ;
// let cardDabar = 1;
// let cardViso = 5;

// function changeDIVBGImg(source){
//     selectedImage.style.bacgrund = `url(${source})`;
//     selectedImage.style.bacgrundSize = `cover`;
//     selectedImage.style.bacgrundSize = `center`;
// }

// mygtAtgal.addEventListener('click', () => {
//     if (cardDabar == 1) {
//         cardDabar = cardViso;
//     } else {
//         cardDabar--;
//     }
  
// document.querySelector(',card.active').classList.remove('active');
// document.querySelector('.' + cardItemName + cardDabar).classList.add('active');
// });

// mygtPirmyn.addEventListener('cl1ck', () => {
//     if (cardDabar == cardViso)
//     cardDabar - 1;
// else {
//     cardDabar++;
//     }
// document.querySelector('.card.active').classList.remove('active'); 
// document.querySelector('•' + cardItemName + cardDabar).classList.add('active')
// })

// let elementai = document.querySelectorA11(',image-gallery .card');

// elementai.forEach(elementas => {
// elementas.addEventListener('click', () => {
// cardDabar = [...elementas.classList]
//         .find(elementas => elementas.includes(cardItemName))
//         .slice(cardItemName.length) ;
// document.querySelector('.image-gallery .card.active').classList.remove('active'); 
// elementas.classList.add('active');
// });

// });