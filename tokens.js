//board
const boardField = document.querySelectorAll("#game-card");
const trapBox = document.getElementById("trapBox");
let boardFieldArray = Array.from(boardField);
let found;

function moveTokens() {
  for (let i = 0; i < boardFieldArray.length; i++) {
    let number = boardFieldArray[i].getAttribute("data-number");
    let trap = boardFieldArray[i].getAttribute("data-trap");
    let trapText = boardFieldArray[i].getAttribute("data-text");
    let trapImage = boardFieldArray[i].getAttribute("data-image");

    //Token for player 1
    if (scoreP1 === scoreP2) {
      scoreP1 -= 1;

      player1Score.innerHTML = scoreP1;

      function penaltyP1() {
        trapBox.style.display = "block";
        trapBox.innerHTML = "";
        trapBox.innerHTML = `<div class="hidden">
                                            <p class="placeholderText">Oh no, Player 1, you cannot share a tile with Player 2!</p> 
                                            <p>Your penalty is loosing 1 point</p>
                    
                                        </div>`;

        setTimeout(function () {
          trapBox.style.display = "none";
        }, 3500);
      }
      penaltyP1();

      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText">You lost a point.</p>`;
    } else if (scoreP1 === trap) {
      found = true;

      scoreP1 -= 3;

      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText">Player 1, you got a trap</p>`;

      boardFieldArray[
        i
      ].innerHTML = `<img class="board-img" alt="picture of player 1 character" src="${img1}"/>`;
      function trapWindowP1() {
        trapBox.style.display = "block";
        trapBox.innerHTML = "";
        trapBox.innerHTML = `<div class="hidden">
                                            <p class="placeholderText">Oh no, Player 1, you got a trap!</p> 
                                            <p>${trapText}</p>
                                            <img class="icon" alt="picture of an icon" src="images/icons/${trapImage}"/>
                                        </div>`;

        setTimeout(function () {
          trapBox.style.display = "none";
        }, 3500);
      }
      trapWindowP1();
    } else if (scoreP1 === number) {
      found = true;

      boardFieldArray[
        i
      ].innerHTML = `<img class="board-img" alt="picture of player 1 character" src="${img1}"/>`;

      //Token Player 2
    } else if (scoreP2 === scoreP1) {
      console.log("can't share space, take a point p2");

      scoreP2 -= 1;
      player2Score.innerHTML = scoreP2;

      function penaltyP2() {
        trapBox.style.display = "block";
        trapBox.innerHTML = "";
        trapBox.innerHTML = `<div class="hidden">
                                            <p class="placeholderText">Oh no, Player 2, you cannot share a tile with Player 1!</p> 
                                            <p>Your penalty is loosing 1 point</p>
                    
                                        </div>`;

        setTimeout(function () {
          trapBox.style.display = "none";
        }, 3500);
      }
      penaltyP2();

      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText"> You lost a point.`;
    } else if (scoreP2 == trap) {
      found = true;

      scoreP2 -= 3;

      placeholder.innerHTML = "";
      placeholder.innerHTML = `<p class="placeholderText">Player 2, you got a trap</p>`;

      boardFieldArray[
        i
      ].innerHTML = `<img class="board-img" alt="picture of player 2 character" src="${img2}"/>`;

      function trapWindowP2() {
        trapBox.style.display = "block";
        trapBox.innerHTML = "";
        trapBox.innerHTML = `<div class="hidden">
                                              <p class="placeholderText">Oh no, Player 2, you got a trap!</p> 
                                              <p>${trapText}</p>
                                              <img class="icon" alt="picture of an icon" src="images/icons/${trapImage}"/>
                                          </div>`;

        setTimeout(function () {
          trapBox.style.display = "none";
        }, 3500);
      }
      trapWindowP2();
    } else if (scoreP2 === number) {
      found = true;

      boardFieldArray[
        i
      ].innerHTML = `<img class="board-img" alt="picture of player 2 character" src="${img2}"/>`;
    } else {
      found = false;
      let display = boardFieldArray[i].getAttribute("data-display");
      boardFieldArray[i].innerHTML = `<p>${display}</p>`;
    }
  }
}

window.addEventListener("click", function (event) {
  if (event.target == trapBox) {
    trapBox.style.display = "none";
  }
});
