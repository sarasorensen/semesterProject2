//board
const boardField = document.querySelectorAll(".game-card");
const trapBox = document.getElementById("trapBox");
let boardFieldArray = Array.from(boardField);
let found;

function moveTokens() {
  for (let i = 0; i < boardFieldArray.length; i++) {
    const number = i + 1;
    const tileNumber = boardFieldArray[i].getAttribute("data-display");
    const tileImg = boardFieldArray[i].getAttribute("data-img");

    boardFieldArray[i].innerHTML = `<p class="number"> ${tileNumber}</p>`;

    if (tileNumber == undefined) {
      boardFieldArray[
        i
      ].innerHTML = `<img class="board-icon" alt="picture of an icon" src="images/icons/${tileImg}"/>`;
    }

    if (scoreP1 == number) {
      found = true;
      boardFieldArray[
        i
      ].innerHTML += `<img class="board-img" alt="picture of player 1 character" src="${img1}"/>`;
    }

    if (scoreP2 == number) {
      found = true;
      boardFieldArray[
        i
      ].innerHTML += `<img class="board-img" alt="picture of player 2 character" src="${img2}"/>`;
    }
  }
}

window.addEventListener("click", function (event) {
  if (event.target == trapBox) {
    trapBox.style.display = "none";
  }
});
