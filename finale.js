//clear storage
function clear() {
  window.location = "index.html";
  localStorage.clear();
}

function redirect() {
  window.location = "index.html";
  localStorage.clear();
}

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//"media query"
window.addEventListener("resize", function () {
  w = window.innerWidth;
  h = window.innerHeight;
});

//button to start the animation
const startConfetti = document.querySelector("#confettiBtn");

document.addEventListener("DOMContentLoaded", function (event) {
  event.stopPropagation();
  startConfetti.addEventListener("click", initializeConfetti);
});

const confettiNumber = Math.floor(width / 6);
let confettis = [];

//creating the animation
function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);

  // remove in a batch as to not cause flickering in the animation
  confettis.forEach(function (confetti, index) {
    if (confetti.outOfBounds) {
      confettis.splice(index, 1);
      return;
    }
    confetti.update();
  });
}

function initializeConfetti() {
  // Make a new array and initialize the new confettis here.
  const newConfettis = Array(confettiNumber)
    .fill()
    .map(() => new confetti());

  // Now contact the new ones with the existing array
  confettis = [...confettis, ...newConfettis];
}

animate();

const colours = [
  "#FF0000",
  "#FF7F00",
  "#FFF000",
  "#05ad21",
  "#0000FF",
  "#8F00FF",
];

function confetti() {
  this.x = Math.round(Math.random() * width);
  this.y = Math.round(Math.random() * height);
  this.rotation = Math.random() * 360;
  const size = Math.random() * (width / 100);
  this.size = size < 5 ? 5 : size;
  this.color = colours[Math.floor(colours.length * Math.random())];
  this.speed = this.size / 10;
  // New check added
  this.outOfBounds = false;
}

confetti.prototype.update = function () {
  this.y += this.speed;

  context.beginPath();
  context.arc(
    this.x,
    this.y,
    this.size,
    this.rotation,
    this.rotation + Math.PI / 3
  );
  context.lineTo(this.x, this.y);
  context.closePath();
  context.fillStyle = this.color;
  context.fill();

  // If the confetti is off the scree set the flag so we know to remove it
  if (this.y - this.size > height) {
    this.outOfBounds = true;
  }
};
