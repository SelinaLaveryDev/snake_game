console.clear();

// variables
const box = document.querySelector(".box");
const score = document.querySelector(".score");
let counter = 0;
let moves = 100;
let speed = 2000;

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
  const width = window.innerWidth - 100;
  const height = window.innerHeight - 100;
  const randomX = randomNum(width);
  const randomY = randomNum(height);
  box.style.top = `${randomX}px`;
  box.style.left = `${randomY}px`;
  moves--;
}

function resizeBox() {
  if (moves <= 100 && moves > 90) {
    box.style.width = "100px";
    box.style.height = "100px";
  } else if (moves <= 90 && moves > 80) {
    box.style.width = "90px";
    box.style.height = "90px";
  } else if (moves <= 80 && moves > 70) {
    box.style.width = "80px";
    box.style.height = "80px";
  } else if (moves <= 70 && moves > 60) {
    box.style.width = "70px";
    box.style.height = "70px";
  } else if (moves <= 60 && moves > 50) {
    box.style.width = "60px";
    box.style.height = "60px";
  } else if (moves <= 50 && moves > 40) {
    box.style.width = "50px";
    box.style.height = "50px";
  } else if (moves <= 40 && moves > 30) {
    box.style.width = "40px";
    box.style.height = "40px";
  } else if (moves <= 30 && moves > 20) {
    box.style.width = "30px";
    box.style.height = "30px";
  } else if (moves <= 20 && moves > 10) {
    box.style.width = "20px";
    box.style.height = "20px";
  } else if (moves <= 10 && moves > 0) {
    box.style.width = "10px";
    box.style.height = "10px";
  } else {
    clearInterval(myInterval);
  }
}
