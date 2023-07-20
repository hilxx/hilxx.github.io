const images = [
    "bg01.jpg",
    "bg02.jpg",
    "bg03.jpg",
    "bg04.jpg",
    "bg05.jpg",
    "bg06.jpg",
    "bg07.jpg",
    "bg08.jpg",
]

const chosenImg = images[Math.floor(Math.random() * images.length)];
console.log(chosenImg);

//js에서 html 생성 = createElement
const bgImg = document.createElement("img");
bgImg.src = `images/${chosenImg}`;
console.log(bgImg);

document.body.appendChild(bgImg);

//과제 10일차
// const bg = document.querySelector("#bg-color");
// const btn = document.querySelector("#changeBtn");
// const colors = [
//   "linear-gradient(45deg, #f1beba, #eeb0bd)",
//   "linear-gradient(45deg, #eca7c4, #cbb1d6)",
//   "linear-gradient(45deg, #b9b7dc, #9dcbef)",
//   "linear-gradient(45deg, #f7c9c9, #e8c5cc)",
//   "linear-gradient(45deg, #c7bacc, #b8b6ce)",
//   "linear-gradient(45deg, #92a8d1, #f1beba)"
// ];

// function rndColor() {
//   const chosenColor = colors[Math.floor(Math.random() * colors.length)];
//   console.log(chosenColor);
//   bg.style.background = chosenColor;
// }

// btn.addEventListener("click", rndColor);