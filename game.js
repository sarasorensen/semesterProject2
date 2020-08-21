//warning for clicking new game
function warning() {
  var answer = confirm(
    "If you click ok, you will loose your progress in this current game."
  );
  if (answer) window.location = "index.html";
}
//display for player chosen
function getStorage() {
  var player1 = localStorage.getItem("Player1");
  var img1 = localStorage.getItem("img1");

  document.getElementById("player1").innerHTML += `
  <h2 class="playerId">Player 1</h2>
  <h3 class="playerTitle">${player1}</h3>
      <img  class="card-img-chosen" alt="picture of player 1 character" src="${img1} "</img>
      <p class="playerScore">Score: </p>
      `;

  var player2 = localStorage.getItem("Player2");
  var img2 = localStorage.getItem("img2");

  document.getElementById("player2").innerHTML += `
  <h2 class="playerId">Player 2</h2>
  <h3 class="playerTitle">${player2}</h3> 
  <img  class="card-img-chosen" alt="picture of player 2 character" src="${img2} "</img>
  <p class="playerScore">Score:</p>
  `;
}

//dice
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
};

const button = document.getElementById("button");

let turn;
let playerDisplay = true;

button.onclick = function () {
  let result = dice.roll();
  console.log(result);

  let scoreP2 = result;
  let scoreP1 = result;
  if (turn == 0) {
    turn = 1;
    document.getElementById("player1").innerHTML += `
    <p class="player1Score">${scoreP2}</p>
    `;

    var currentPlayer = document.getElementById("currentPlayer2");
    document.getElementById("currentPlayer2").style.display = "block";

    var currentPlayer = document.getElementById("currentPlayer1");
    document.getElementById("currentPlayer1").style.display = "none";

    turn++;
  } else {
    turn = 0;
    document.getElementById("player2").innerHTML += `
    <p class="player2Score">${scoreP1} </p>
    `;
    var currentPlayer = document.getElementById("currentPlayer1");
    document.getElementById("currentPlayer1").style.display = "block";
    var currentPlayer = document.getElementById("currentPlayer2");
    document.getElementById("currentPlayer2").style.display = "none";
  }
};
