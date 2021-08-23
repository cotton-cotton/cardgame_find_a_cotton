const ho = 4;
const ver = 3;
const container = document.querySelector(".container");

const quizImages = [
  "cotton_1.JPG", "cotton_2.JPG", "cotton_3.jpg",
  "cotton_4.PNG", "cotton_5.jpg", "cotton_6.JPG",
  "cotton_1.JPG", "cotton_2.JPG", "cotton_3.jpg",
  "cotton_4.PNG", "cotton_5.jpg", "cotton_6.JPG",
];

const card = document.querySelector(".card");
const cardInner = document.querySelector(".card-inner");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");



function setting() {
  for (let i = 0; i < quizImages.length; i++) {


    const cardImages = document.createElement("img");
    cardImages.src = `img/${quizImages[i]}`;
    cardBack.appendChild(cardImages);

    card.addEventListener("mouseenter", () => {
      card.classList.toggle("flipped");
      console.log("hi");
    });
  }
}

setting();