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

let turn = 0;
var rolledDice = 1;

//function for which player
button.addEventListener("click", function () {
  dice.roll();
  if (rolledDice < 31) {
    console.log("dice rolled number of times = " + rolledDice);
    rolledDice++;
  } else if (rolledDice === 31) {
    alert("game over");
  }
  if (turn == 0) {
    turn = 1;
    player1();
    turn++;
  } else {
    player2();
  }
});

let scoreP1 = 0;

function player1() {
  let result = dice.roll();

  scoreP1 = result;

  document.getElementById("player1").innerHTML += `
  <p class="player1Score">${scoreP1}</p>`;

  console.log("p1 dice result = " + scoreP1);

  //returning score as a number
  localStorage.setItem("score Player1", scoreP1);
  localStorage.getItem("score Player1");

  const parsedP1 = parseInt(scoreP1);
  if (isNaN(parsedP1)) {
    return 0;
  }

  //Score display player 1
  document.getElementById("player1").innerHTML = "";

  var player1 = localStorage.getItem("Player1");
  var img1 = localStorage.getItem("img1");

  //addedScoreP1 = scoreP1 + parsedP1;

  document.getElementById("player1").innerHTML += `
  <h2 class="playerId">Player 1</h2>
  <h3 class="playerTitle">${player1}</h3>
  <img class="card-img-chosen" alt="picture of player 1 character" src="${img1} "</img>
  <p class="playerScore">Score: ${scoreP1}</p>`;

  //Display of rolled dice
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "";
  placeholder.innerHTML = `<p class="placeholderText">Player 1 you rolled a ${scoreP1}</p>`;

  //Player 2's turn display
  currentPlayer2.style.display = "block";
  currentPlayer1.style.display = "none";
}

let scoreP2 = 0;

function player2() {
  let result = dice.roll();

  turn = 0;
  scoreP2 = result;

  document.getElementById("player2").innerHTML += `
  <p class="player2Score">${scoreP2} </p>`;

  console.log("p2 dice result = " + scoreP2);

  //returning score as a number
  localStorage.setItem("score Player2", scoreP2);
  localStorage.getItem("score Player2");

  const parsedP2 = parseInt(scoreP2);
  if (isNaN(parsedP2)) {
    return 0;
  }
  console.log(parsedP2);

  //Score display player 2
  document.getElementById("player2").innerHTML = "";
  var player2 = localStorage.getItem("Player2");
  var img2 = localStorage.getItem("img2");

  //addedScoreP2 = scoreP2 + parsedP2;

  document.getElementById("player2").innerHTML += `
  <h2 class="playerId">Player 2</h2>
  <h3 class="playerTitle">${player2}</h3> 
  <img class="card-img-chosen" alt="picture of player 2 character" src="${img2} "</img>
  <p class="playerScore">Score: ${scoreP2}</p>`;

  //Display of rolled dice
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "";
  placeholder.innerHTML = `<p class="placeholderText"> Player 2 you rolled a ${scoreP2}</p>`;

  //Player 1's turn display
  currentPlayer1.style.display = "block";
  currentPlayer2.style.display = "none";
}
