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
  box.style.top = `${randomX}px`;
  box.style.left = `${randomY}px`;
  moves--;
}

function resizeBox() {
  console.log("size", size);
  if (moves <= 100 && moves > 90) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 90 && moves > 80) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 80 && moves > 70) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 70 && moves > 60) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 60 && moves > 50) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 50 && moves > 40) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 40 && moves > 30) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 30 && moves > 20) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 20 && moves > 10) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else if (moves <= 10 && moves > 0) {
    size -= 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else {
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
