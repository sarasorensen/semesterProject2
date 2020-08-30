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
  <img class="card-img-chosen" alt="picture of player 1 character" src="${img1} "/>
  <p class="playerScore">Score: </p>
  `;
  var player2 = localStorage.getItem("Player2");
  var img2 = localStorage.getItem("img2");
  document.getElementById("player2").innerHTML += `
  <h2 class="playerId">Player 2</h2>
  <h3 class="playerTitle">${player2}</h3> 
  <img class="card-img-chosen" alt="picture of player 2 character" src="${img2} "/>
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
const placeholder = document.getElementById("placeholder");

let isGameActive = true;
let turn = 0;
var rolledDice = 1;

//board
const boardField = document.querySelectorAll("#game-card");
const trapBox = document.getElementById("trapBox");
let boardFieldArray = Array.from(boardField);
let found = false;

function checkStatus() {
  if (rolledDice < 30) {
    console.log(rolledDice);
    rolledDice++;
  } else if (rolledDice === 30) {
    gameOverBox.style.display = "block";
    isGameActive = false;
    setTimeout(function () {
      window.location = "finale.html";
    }, 4500);
  }
}

let result = dice.roll();

//function for which player
button.addEventListener("click", function () {
  if (isGameActive) {
    dice.roll();
    checkStatus();
  } else if (result === 6) {
    checkPlayer();
    console.log("someone got a 6, go check who");
  }
  if (turn == 0) {
    turn = 1;
    player1();
    moveTokens();
  } else {
    player2();
    moveTokens();
  }
});

function checkPlayer() {
  if (resultP1 === 6) {
    placeholder.innerHTML = "";
    placeholder.innerHTML = `<p class="placeholderText"> Player 1 you rolled a ${resultP1}, go again</p>`;
    //Player 1's turn display
    currentPlayer1.style.display = "block";
    currentPlayer2.style.display = "nond";
    console.log("player 1 goes again");
    player1();
    moveTokens();
  } else if (resultP2 === 6) {
    placeholder.innerHTML = "";
    placeholder.innerHTML = `<p class="placeholderText"> Player 1 you rolled a ${resultP2}, go again</p>`;

    //Player 1's turn display
    currentPlayer1.style.display = "none";
    currentPlayer2.style.display = "block";
    console.log("player 2 goes again");
    player2();
    moveTokens();
  }
}
//Function for player 1
let scoreP1 = 0;
let resultP1 = dice.roll();
const p1Display = document.getElementById("player1");

function player1() {
  let resultP1 = dice.roll();

  //Score display player 1
  scoreP1 = scoreP1 + resultP1;

  p1Display.innerHTML = "";
  var player1 = localStorage.getItem("Player1");
  var img1 = localStorage.getItem("img1");
  p1Display.innerHTML += `
  <h2 class="playerId">Player 1</h2>
  <h3 class="playerTitle">${player1}</h3>
  <img class="card-img-chosen" alt="picture of player 1 character" src="${img1} "/>
  <p class="player1Score">Score: ${scoreP1}</p>`;
  //Display of rolled dice
  placeholder.innerHTML = "";
  placeholder.innerHTML = `<p class="placeholderText">Player 1 you rolled a ${resultP1}</p>`;
  //Player 2's turn display
  currentPlayer2.style.display = "block";
  currentPlayer1.style.display = "none";
  turn++;
}

//Function for player 2
let scoreP2 = 0;
let resultP2 = dice.roll();
const p2Display = document.getElementById("player2");

function player2() {
  let resultP2 = dice.roll();
  turn = 0;

  //Score display player 2
  scoreP2 = scoreP2 + resultP2;

  p2Display.innerHTML = "";
  const player2 = localStorage.getItem("Player2");
  const img2 = localStorage.getItem("img2");

  p2Display.innerHTML += `
  <h2 class="playerId">Player 2</h2>
  <h3 class="playerTitle">${player2}</h3> 
  <img class="card-img-chosen" alt="picture of player 2 character" src="${img2} "/>
  <p class="player2Score">Score: ${scoreP2}</p>`;

  //Display of rolled dice
  placeholder.innerHTML = "";
  placeholder.innerHTML = `<p class="placeholderText"> Player 2 you rolled a ${resultP2}</p>`;

  //Player 1's turn display
  currentPlayer1.style.display = "block";
  currentPlayer2.style.display = "none";
}

function moveTokens() {
  const player1 = localStorage.getItem("Player1");
  const img1 = localStorage.getItem("img1");

  const player2 = localStorage.getItem("Player2");
  const img2 = localStorage.getItem("img2");

  for (var i = 0; i < boardFieldArray.length; i++) {
    let number = boardFieldArray[i].getAttribute("data-number");
    let trap = boardFieldArray[i].getAttribute("data-trap");
    let trapText = boardFieldArray[i].getAttribute("data-text");

    //move token player 1
    if (scoreP1 == number) {
      found = true;

      boardFieldArray[i].innerHTML = `
  <img class="board-img" alt="picture of player 1 character" src="${img1}"/>`;

      //trap player 1
    } else if (scoreP1 == trap) {
      found = true;

      scoreP1 -= 3;

      boardFieldArray[i].innerHTML = `
    <img class="board-img" alt="picture of player 1 character" src="${img1}"/>`;

      p1Display.innerHTML = "";
      p1Display.innerHTML += `
<h2 class="playerId">Player 1</h2>
<h3 class="playerTitle">${player1}</h3> 
<img class="card-img-chosen" alt="picture of player 1 character" src="${img1} "/>
<p class="player2Score">Score: ${scoreP1}</p>`;

      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText">Player 1, you got a trap</p>`;

      //Trap box player 1
      function openWindow1() {
        trapBox.style.display = "block";
        trapBox.innerHTML = "";
        trapBox.innerHTML = `<div class="hidden"> <p class="placeholderText">Oh no, Player 1, you got a trap!</p> 
<p>${trapText}</p></div>`;
        setTimeout(function () {
          trapBox.style.display = "none";
        }, 3500);
        window.addEventListener("click", function (event) {
          if (event.target == trapBox) {
            trapBox.style.display = "none";
          }
        });
      }

      openWindow1();
      //check if player 1 wins
    } else if (scoreP1 >= 30) {
      localStorage.setItem("Winner", player1);
      gameOverBox.style.display = "block";
      isGameActive = false;
      setTimeout(function () {
        window.location = "finale.html";
      }, 4500);

      //Player 2 token
    } else if (scoreP2 == number) {
      found = true;

      boardFieldArray[i].innerHTML = `
  <img class="board-img" alt="picture of player 2 character" src="${img2}"/>`;

      //trap player 2
    } else if (scoreP2 == trap) {
      found = true;
      scoreP2 -= 3;

      boardFieldArray[i].innerHTML = `
      <img class="board-img" alt="picture of player 2 character" src="${img2}"/>`;

      p2Display.innerHTML = "";
      p2Display.innerHTML += `
  <h2 class="playerId">Player 2</h2>
  <h3 class="playerTitle">${player2}</h3> 
  <img class="card-img-chosen" alt="picture of player 2 character" src="${img2} "/>
  <p class="player2Score">Score: ${scoreP2}</p>`;

      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText">Player 2, you got a trap</p>`;
      //Trap box player 2
      function openWindow2() {
        trapBox.style.display = "block";
        trapBox.innerHTML = "";
        trapBox.innerHTML = `<div class="hidden"><p class="placeholderText">Oh no, Player 2, you got a trap!</p>
  <p>${trapText}</p></div>`;
        setTimeout(function () {
          trapBox.style.display = "none";
        }, 3500);
        window.addEventListener("click", function (event) {
          if (event.target == trapBox) {
            trapBox.style.display = "none";
          }
        });
      }

      openWindow2();
      //Check if player2 wins
    } else if (scoreP2 >= 30) {
      localStorage.setItem("Winner", player2);
      gameOverBox.style.display = "block";
      isGameActive = false;
      setTimeout(function () {
        window.location = "finale.html";
      }, 4500);
    } else {
      found = false;
      let display = boardFieldArray[i].getAttribute("data-display");
      boardFieldArray[i].innerHTML = `
  <p>${display}</p>`;
    }
  }
}
