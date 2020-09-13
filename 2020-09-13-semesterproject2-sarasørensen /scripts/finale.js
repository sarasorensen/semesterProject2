const winner = localStorage.getItem("Winner");
const h2 = document.getElementById("winner");

h2.innerHTML = "";
h2.innerHTML = ` ${winner}'s banner holds the throne`;

//clear storage
function clear() {
  window.location = "index.html";
  localStorage.clear();
}
function clearStorage() {
  window.location.replace("index.html");
  localStorage.clear();
}
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const startConfetti = document.querySelector("#confettiBtn");
document.addEventListener("DOMContentLoaded", function (event) {
  event.stopPropagation();
  startConfetti.addEventListener("click", initializeConfetti);
});

function initializeConfetti() {
  update();
  draw();
}

let confettis = [];
let numberOfConfettis = 100;
let lastUpdated = Date.now();

function generateColor() {
  let colors = [
    "#234B52",
    "#a94442",
    "#FCD268",
    "#6EC8C7",
    "#2D5372",
    "#126d4f",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function update() {
  let now = Date.now();
  updated = now - lastUpdated;

  for (let index = confettis.length - 1; index >= 0; index--) {
    let confPiece = confettis[index];

    if (confPiece.y > canvas.height) {
      confettis.splice(index, 1);
      continue;
    }

    confPiece.y += confPiece.gravity * updated;
  }

  while (confettis.length < numberOfConfettis) {
    confettis.push(new confetti(Math.random() * canvas.width));
  }

  lastUpdated = now;

  setTimeout(update, 10);
}

function confetti() {
  this.x = Math.round(Math.random() * width);
  this.y = Math.round(Math.random() * height);
  this.size = Math.random() * (width / 100);
  this.gravity = (Math.random() * 0.5 + 0.75) * 0.1;
  this.rotation = Math.random() * 360;
  this.speed = this.size / 10;
  this.rotationSpeed = Math.PI * 2 * (Math.random() - 0.5) * 0.001;
  this.color = generateColor();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettis.forEach(function (confPiece) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(
      confPiece.x,
      confPiece.y,
      confPiece.size,
      confPiece.rotation,
      confPiece.rotation * Math.PI
    );
    ctx.lineTo(confPiece.x, confPiece.y);
    ctx.fillStyle = confPiece.color;
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  });

  requestAnimationFrame(draw);
}
