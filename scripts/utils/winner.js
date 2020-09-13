function checkP1() {
  if (scoreP1 === 30) {
    localStorage.setItem("Winner", player1);
    gameOverBox.style.display = "block";
    isGameActive = false;
    setTimeout(function () {
      window.location = "finale.html";
    }, 2500);
  } else if (scoreP1 >= 30) {
    localStorage.setItem("Winner", player1);
    gameOverBox.style.display = "block";
    isGameActive = false;
    setTimeout(function () {
      window.location = "finale.html";
    }, 2500);
  } else {
    isGameActive = true;
  }
}

function checkP2() {
  if (scoreP2 === 30) {
    localStorage.setItem("Winner", player2);
    gameOverBox.style.display = "block";
    isGameActive = false;
    setTimeout(function () {
      window.location = "finale.html";
    }, 2500);
  } else if (scoreP2 >= 30) {
    localStorage.setItem("Winner", player2);
    gameOverBox.style.display = "block";
    isGameActive = false;
    setTimeout(function () {
      window.location = "finale.html";
    }, 2500);
  } else {
    isGameActive = true;
  }
}
