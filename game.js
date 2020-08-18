//display for player chosen

function getStorage() {
  var player1 = localStorage.getItem("Player1");
  var img1 = localStorage.getItem("img1");

  document.getElementById("player1").innerHTML += `
  <h2 class="playerId">Player 1</h2>
  <h3 class="playerTitle">${player1}</h3>
      <img  class="card-img-chosen" alt="picture of player 1 character" src="${img1} "</img>
      <p class="playerScore">Score: 0</p>
      `;

  var player2 = localStorage.getItem("Player2");
  var img2 = localStorage.getItem("img2");

  document.getElementById("player2").innerHTML += `
  <h2 class="playerId">Player 2</h2>
  <h3 class="playerTitle">${player2}</h3> 
  <img  class="card-img-chosen" alt="picture of player 2 character" src="${img2} "</img>
  <p class="playerScore">Score: 0</p>
  `;
}

function warning() {
  var answer = confirm(
    "If you click ok, you will loose your progress in this current game."
  );
  if (answer) window.location = "index.html";
}

//dice
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
};

//Prints dice roll to the page
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = `${number}`;
}

var button = document.getElementById("button");

button.onclick = function () {
  var result = dice.roll();
  printNumber(result);
};
