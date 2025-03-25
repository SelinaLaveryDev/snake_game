console.clear();

// variables
const box = document.querySelector(".box");
const score = document.querySelector(".score");
let counter = 0;
let moves = 100;
let speed = 2000;

// random number function
function randomNum(num) {
  return Math.ceil(Math.random() * num);
}

// move box function
function moveBox() {
  const width = window.innerWidth - 100;
  const height = window.innerHeight - 100;
  const randomX = randomNum(width);
  const randomY = randomNum(height);
  box.style.top = `${randomX}px`;
  box.style.left = `${randomY}px`;
  moves--;
}
