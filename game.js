//warning for clicking new game
function warning() {
  var answer = confirm(
    "If you click ok, you will loose your progress in this current game."
  );
  if (answer) window.location = "index.html";
  localStorage.clear();
}
//display for player chosen
function getStorage() {
  var player1 = localStorage.getItem("Player1");
  var img1 = localStorage.getItem("img1");
  document.getElementById("player1").innerHTML += `
  <h2 class="playerId">Player 1</h2>
  <h3 class="playerTitle">${player1}</h3>
  <img class="card-img-chosen" alt="picture of player 1 character" src="${img1} "</img>
  <p class="playerScore">Score: </p>
  `;
  var player2 = localStorage.getItem("Player2");
  var img2 = localStorage.getItem("img2");
  document.getElementById("player2").innerHTML += `
  <h2 class="playerId">Player 2</h2>
  <h3 class="playerTitle">${player2}</h3> 
  <img class="card-img-chosen" alt="picture of player 2 character" src="${img2} "</img>
  <p class="playerScore">Score:</p>
  `;
}

//Display for who starts
const currentPlayer2 = document.getElementById("currentPlayer2");
currentPlayer2.style.display = "none";
const currentPlayer1 = document.getElementById("currentPlayer1");
currentPlayer1.style.display = "block";

//dice
var dice = {
  sides: 6,
  roll: function () {
    var diceNumber = Math.floor(Math.random() * 6 + 1);
    return diceNumber;
  },
};

const button = document.getElementById("button");
const gameOverBox = document.getElementById("gameOverBox");

let isGameActive = true;
const boardField = document.querySelectorAll("#game-card");

var player1Name = localStorage.getItem("Player1");
var player2Name = localStorage.getItem("Player2");

let turn = 0;
var rolledDice = 1;

//function for which player
button.addEventListener("click", function () {
  if (isGameActive) {
    dice.roll();
    if (rolledDice < 30) {
      console.log(rolledDice);
      rolledDice++;
    } else if (rolledDice === 30) {
      var timeleft = 10;
      gameOverBox.style.display = "block";
      isGameActive = false;
      setTimeout(function () {
        window.location = "finale.html";
      }, 4500);
    }
  }
  if (turn == 0) {
    turn = 1;
    player1();
  } else {
    player2();
  }
});

//Function for player 1
let scoreP1 = 0;

function player1() {
  let result = dice.roll();

  //Score display player 1
  scoreP1 = scoreP1 + result;

  const p1Display = document.getElementById("player1");

  p1Display.innerHTML = "";
  var player1 = localStorage.getItem("Player1");
  var img1 = localStorage.getItem("img1");

  p1Display.innerHTML += `
  <h2 class="playerId">Player 1</h2>
  <h3 class="playerTitle">${player1}</h3>
  <img class="card-img-chosen" alt="picture of player 1 character" src="${img1} "</img>
  <p class="player1Score">Score: ${scoreP1}</p>`;

  //Display of rolled dice
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "";
  placeholder.innerHTML = `<p class="placeholderText">Player 1 you rolled a ${result}</p>`;

  //Player 2's turn display
  currentPlayer2.style.display = "block";
  currentPlayer1.style.display = "none";

  turn++;
}

//Function for player 2
let scoreP2 = 0;

function player2() {
  let result = dice.roll();
  turn = 0;

  //Score display player 2
  scoreP2 = scoreP2 + result;

  const p2Display = document.getElementById("player2");

  p2Display.innerHTML = "";
  var player2 = localStorage.getItem("Player2");
  var img2 = localStorage.getItem("img2");

  p2Display.innerHTML += `
  <h2 class="playerId">Player 2</h2>
  <h3 class="playerTitle">${player2}</h3> 
  <img class="card-img-chosen" alt="picture of player 2 character" src="${img2} "</img>
  <p class="player2Score">Score: ${scoreP2}</p>`;

  //Display of rolled dice
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "";
  placeholder.innerHTML = `<p class="placeholderText"> Player 2 you rolled a ${result}</p>`;

  //Player 1's turn display
  currentPlayer1.style.display = "block";
  currentPlayer2.style.display = "none";
}

boardField.forEach(function (gameCard) {
  let fieldNumber = gameCard.dataset["number"];
  console.log(fieldNumber);
  if (fieldNumber === scoreP2) {
    fieldNumber.style.backgroundColor = "red";
  }
});
