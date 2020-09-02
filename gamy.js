const player1 = localStorage.getItem("Player1");
const img1 = localStorage.getItem("img1");
const player2 = localStorage.getItem("Player2");
const img2 = localStorage.getItem("img2");

const player1Title = document.querySelector(".playerTitle.one");
player1Title.innerHTML = player1;
const player2Title = document.querySelector(".playerTitle.two");
player2Title.innerHTML = player2;

const player1Score = document.querySelector(".player1Score span");

const player1Image = document.querySelector(".card-img-chosen.one");
player1Image.src = img1;
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

// let result = dice.roll();

//function for which player
button.addEventListener("click", function () {
  if (isGameActive) {
    dice.roll();
    checkStatus();
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

    //Player 1's turn display
    // currentPlayer.style.display = "block";
    // currentPlayer2.style.display = "none";
    console.log("player 2 got a 6, go again");
  }
}

function moveTokens() {
  // const player1 = localStorage.getItem("Player1");
  // const img1 = localStorage.getItem("img1");

  // const player2 = localStorage.getItem("Player2");
  // const img2 = localStorage.getItem("img2");

  for (var i = 0; i < boardFieldArray.length; i++) {
    let number = boardFieldArray[i].getAttribute("data-number");
    let trap = boardFieldArray[i].getAttribute("data-trap");
    let trapText = boardFieldArray[i].getAttribute("data-text");

    if (scoreP1 === scoreP2) {
      console.log("can't share space, loose point p1");
      scoreP1 -= 1;

      //updated display of rolled dice
      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText">Player 1 you rolled a ${resultP1}</p>`;
    } //move token player 1
    else if (scoreP1 == number) {
      found = true;

      boardFieldArray[
        i
      ].innerHTML = `<img class="board-img" alt="picture of player 1 character" src="${img1}"/>`;

      //trap player 1
    } else if (resultP1 == 6) {
      console.log("player 1 goes again");
    } else if (scoreP1 == trap) {
      found = true;

      scoreP1 -= 3;

      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText">Player 1, you got a trap</p>`;

      boardFieldArray[
        i
      ].innerHTML = `<img class="board-img" alt="picture of player 1 character" src="${img1}"/>`;

      //Trap box player 1
      function openWindow1() {
        trapBox.style.display = "block";
        trapBox.innerHTML = "";
        trapBox.innerHTML = `<div class="hidden">
                                        <p class="placeholderText">Oh no, Player 1, you got a trap!</p> 
                                        <p>${trapText}</p>
                                    </div>`;

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
      localStorage.setItem("Winner", JSON.stringify(player1));
      gameOverBox.style.display = "block";
      isGameActive = false;
      setTimeout(function () {
        window.location = "finale.html";
      }, 4500);

      //Player 2 token
    } else if (scoreP2 === scoreP1) {
      console.log("can't share space, take a point p2");

      scoreP2 -= 1;

      //Updated display of rolled dice
      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText"> Player 2 you rolled a ${resultP2}</p>`;
    } else if (scoreP2 == number) {
      found = true;

      boardFieldArray[
        i
      ].innerHTML = `<img class="board-img" alt="picture of player 2 character" src="${img2}"/>`;

      //trap player 2
    } else if (scoreP2 === trap) {
      found = true;
      scoreP2 -= 3;

      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText">Player 2, you got a trap</p>`;

      boardFieldArray[
        i
      ].innerHTML = `<img class="board-img" alt="picture of player 2 character" src="${img2}"/>`;
      //Trap box player 2
      function openWindow2() {
        trapBox.style.display = "block";
        trapBox.innerHTML = "";
        trapBox.innerHTML = `<div class="hidden">
                                        <p class="placeholderText">Oh no, Player 2, you got a trap!</p>
                                        <p>${trapText}</p>
                                    </div>`;

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
      localStorage.setItem("Winner", JSON.stringify(player2));
      gameOverBox.style.display = "block";
      isGameActive = false;
      setTimeout(function () {
        window.location = "finale.html";
      }, 4500);
    } else {
      found = false;
      let display = boardFieldArray[i].getAttribute("data-display");
      boardFieldArray[i].innerHTML = `<p>${display}</p>`;
    }
  }
}
