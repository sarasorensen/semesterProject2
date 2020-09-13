const diceFace = document.querySelectorAll(".face");
const diceBox = document.getElementById("dices");

diceBox.innerHTML = "";
diceBox.style.display = "block";
diceBox.appendChild(diceFace[0]);

//dice
const dice = {
  sides: 6,
  roll: function () {
    var diceNumber = Math.floor(Math.random() * 6 + 1);

    if (diceNumber === 1) {
      diceBox.innerHTML = "";
      diceBox.style.display = "block";
      diceBox.appendChild(diceFace[1]);
    } else if (diceNumber === 2) {
      diceBox.innerHTML = "";
      diceBox.style.display = "block";
      diceBox.appendChild(diceFace[2]);
    } else if (diceNumber === 3) {
      diceBox.innerHTML = "";
      diceBox.style.display = "block";
      diceBox.appendChild(diceFace[3]);
    } else if (diceNumber === 4) {
      diceBox.innerHTML = "";
      diceBox.style.display = "block";
      diceBox.appendChild(diceFace[4]);
    } else if (diceNumber === 5) {
      diceBox.innerHTML = "";
      diceBox.style.display = "block";
      diceBox.appendChild(diceFace[5]);
    } else {
      diceBox.innerHTML = "";
      diceBox.style.display = "block";
      diceBox.appendChild(diceFace[6]);
    }
    return diceNumber;
  },
};
