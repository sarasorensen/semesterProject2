const player1 = localStorage.getItem("Player1");
const img1 = localStorage.getItem("img1");
const player2 = localStorage.getItem("Player2");
const img2 = localStorage.getItem("img2");

//player 1
const player1Title = document.querySelector(".playerTitle.one");
player1Title.innerHTML = player1;
const player1Image = document.querySelector(".card-img-chosen.one");
player1Image.src = img1;
const player1Score = document.querySelector(".player1Score span");

//player 2
const player2Title = document.querySelector(".playerTitle.two");
player2Title.innerHTML = player2;
const player2Image = document.querySelector(".card-img-chosen.two");
player2Image.src = img2;
const player2Score = document.querySelector(".player2Score span");

//Display for who starts
const currentPlayer2 = document.getElementById("currentPlayer2");
currentPlayer2.style.display = "none";
const currentPlayer1 = document.getElementById("currentPlayer1");
currentPlayer1.style.display = "block";

const button = document.getElementById("button");
const gameOverBox = document.getElementById("gameOverBox");
const placeholder = document.getElementById("placeholder");

let isGameActive = true;
let turn = 0;
let rolledDice = 1;

//function for which player
button.addEventListener("click", function () {
  if (isGameActive) {
    dice.roll();
    checkWinnerP1();
    checkWinnerP2();
  }
  if (turn === 0) {
    doPlayer1();
  } else {
    doPlayer2();
  }
});

//Function for player 1
let scoreP1 = 0;
let resultP1;
const p1Display = document.getElementById("player1");

function doPlayer1() {
  resultP1 = dice.roll();

  console.log("resultP1", resultP1);

  //Score display player 1
  scoreP1 = scoreP1 + resultP1;
  moveTokens();
  player1Score.innerHTML = scoreP1;

  if (resultP1 !== 6) {
    currentPlayer2.style.display = "block";
    currentPlayer1.style.display = "none";
    placeholder.innerHTML = `<p class="placeholderText">Player 1 you rolled a ${resultP1}</p>`;
    turn = 1;
  } else {
    placeholder.innerHTML = `<p class="placeholderText"> Player 1 you rolled a ${resultP1}, go again</p>`;

    //Player 1's turn display
    currentPlayer1.style.display = "block";
    currentPlayer2.style.display = "none";
    console.log("player 1 got a 6, go again");
  }
}

//Function for player 2
let scoreP2 = 0;
let resultP2;

function doPlayer2() {
  resultP2 = dice.roll();

  console.log("resultP2", resultP2);

  //Score display player 2
  scoreP2 = scoreP2 + resultP2;
  moveTokens();

  player2Score.innerHTML = scoreP2;

  if (resultP2 !== 6) {
    turn = 0;
    currentPlayer1.style.display = "block";
    currentPlayer2.style.display = "none";
    placeholder.innerHTML = `<p class="placeholderText">Player 2 you rolled a ${resultP2}</p>`;
  } else {
    placeholder.innerHTML = `<p class="placeholderText"> Player 2 you rolled a ${resultP2}, go again</p>`;

    //Player 2's turn display
    currentPlayer1.style.display = "none";
    currentPlayer2.style.display = "block";
    console.log("player 2 got a 6, go again");
  }
}
