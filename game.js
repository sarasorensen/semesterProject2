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

const button = document.getElementById("button");

let turn, scoreP1, scoreP2;

button.addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  console.log("dice result = " + diceNumber);

  scoreP1 = diceNumber;
  scoreP2 = diceNumber;

  if (turn == 0) {
    turn = 1;

    document.getElementById("player1").innerHTML += `
    <p class="player1Score">${scoreP1}</p>
    `;

    //Player 2's turn display
    var currentPlayer = document.getElementById("currentPlayer2");
    document.getElementById("currentPlayer2").style.display = "block";
    var currentPlayer = document.getElementById("currentPlayer1");
    document.getElementById("currentPlayer1").style.display = "none";

    turn++;
  } else {
    turn = 0;
    document.getElementById("player2").innerHTML += `
    <p class="player2Score">${scoreP2} </p>
    `;

    //Player 1's turn display
    var currentPlayer = document.getElementById("currentPlayer1");
    document.getElementById("currentPlayer1").style.display = "block";
    var currentPlayer = document.getElementById("currentPlayer2");
    document.getElementById("currentPlayer2").style.display = "none";
  }
});
