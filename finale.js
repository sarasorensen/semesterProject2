const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//"media query"
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const confettiNumber = Math.floor(width / 6);
let confettis = [];

//button to start the animation
const startConfetti = document.querySelector("#confettiBtn");

document.addEventListener("DOMContentLoaded", function (event) {
  event.stopPropagation();
  startConfetti.addEventListener("click", init);
});

//creating the animation
function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);

  confettis.forEach(function (confetti) {
    confetti.update();
    confetti.draw();
  });

  // remove in a batch as to not cause flickering in the animation
  confettis.forEach((confetti, idx) => {
    if (confetti.outOfBounds) {
      confettis.splice(idx, 1);
      return;
    }
  });
}

// Start the animation.
animate();

function init() {
  // Make a new array and initialize the new confettis here.
  const newConfettis = Array(confettiNumber)
    .fill()
    .map(() => new confetti());

  // Now contact the new ones with the existing array
  confettis = [...confettis, ...newConfettis];
}

function confetti() {
  const colours = [
    "#FF0000",
    "#FF7F00",
    "#FFF000",
    "#05ad21",
    "#0000FF",
    "#8F00FF",
  ];
  this.x = Math.round(Math.random() * width);
  this.y = Math.round(Math.random() * height) - height / 10;
  this.rotation = Math.random() * 360;
  const size = Math.random() * (width / 100);
  this.size = size < 10 ? 10 : size;
  this.color = colours[Math.floor(colours.length * Math.random())];
  this.speed = this.size / 10;
  this.opacity = "0.5";
  // New check added
  this.outOfBounds = false;
}

confetti.prototype.update = function () {
  this.y += this.speed;

  // If the confetti is off the scree set the flag so we know to remove it
  if (this.y - this.size > height) {
    this.outOfBounds = true;
  }
};

confetti.prototype.draw = function () {
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
  context.globalAlpha = this.opacity;
  context.fillStyle = this.color;
  context.fill();
};

//Menu for media queries
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});
