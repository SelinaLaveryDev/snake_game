console.clear();

// variables
const box = document.querySelector(".box");
const score = document.querySelector(".score");
let counter = 0;
let moves = 100;
let speed = 2000;
let size = 100;

// interval function
let myInterval = setInterval(() => {
  moveBox();
  resizeBox();
}, speed);

// random number function
function randomNum(num) {
  return Math.ceil(Math.random() * num);
}

// move box function
function moveBox() {
  const width = window.innerWidth - size;
  const height = window.innerHeight - size;
  const randomX = randomNum(width);
  const randomY = randomNum(height);
  box.style.top = `${randomY}px`;
  box.style.left = `${randomX}px`;
  moves--;
}

function resizeBox() {
  console.log("size", size);
  if (moves % 10 === 0) {
    size -= 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 0) {
    clearInterval(myInterval);
  }
}

box.addEventListener("click", function () {
  // console.log("interval 1", myInterval)
  counter++;
  score.innerText = counter;
  speed -= 250;
  clearInterval(myInterval);
  // console.log("interval clear?", myInterval);
  moveBox();
  myInterval = setInterval(() => {
    moveBox();
    resizeBox();
  }, speed);
  // console.log("interval reset?", myInterval);
  console.log("click event speed", speed);
});
