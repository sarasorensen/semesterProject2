function checkP1() {
  if (scoreP1 >= 30) {
    localStorage.setItem("Winner", JSON.stringify(player1));
    gameOverBox.style.display = "block";
    isGameActive = false;
    setTimeout(function () {
      window.location = "finale.html";
    }, 4500);
  } else {
    isGameActive = true;
  }
}

function checkP2() {
  if (scoreP2 >= 30) {
    localStorage.setItem("Winner", JSON.stringify(player2));
    gameOverBox.style.display = "block";
    isGameActive = false;
    setTimeout(function () {
      window.location = "finale.html";
    }, 4500);
  } else {
    isGameActive = true;
  }
}
