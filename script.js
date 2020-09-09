function clear() {
  window.location = "index.html";
  localStorage.clear();
}
function clearStorage() {
  localStorage.clear();
}

let button = document.getElementById("button");

button.addEventListener("click", function (event) {
  document
    .getElementById("wrapper")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  event.stopPropagation();
});

function chosen() {
  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i].className);

    cards[i].onclick = function () {
      console.log(this.dataset.id + " + " + this.dataset.src);
      if (counter < 1) {
        counter++;
        if (counter === 1) {
          localStorage.setItem("Player1", cards[i].dataset.id);
          localStorage.setItem("img1", cards[i].dataset.src);

          var player1 = localStorage.getItem("Player1");
          var img1 = localStorage.getItem("img1");

          document.getElementById("characterP1").innerHTML += `
                                                                      <img  class="card-img-chosen" alt="icon of chosen character" src="${img1} "/>
                                                                      <h2 class="player-name">Player 1</h2>
                                                                      <h3 class="playerTitle">${player1}</h3> `;
          playersBox.style.display = "block";

          setTimeout(function () {
            playersBox.style.display = "none";
          }, 1500);

          if (cards[i].dataset.id === player1) {
            console.log(this.dataset.id + " the character is now taken");
            cards[i].innerHTML = "";

            cards[i].classList.add(".newCard");

            var newText = document.createElement("newText");
            newText.classList.add("newText");
            cards[
              i
            ].innerHTML = `<div class="newCard"> <h2 class="newText">This character is taken</h2> </div>`;
            cards[i].appendChild(newText);

            return;
          }
        }
      } else {
        localStorage.setItem("Player2", cards[i].dataset.id);
        localStorage.setItem("img2", cards[i].dataset.src);

        var player2 = localStorage.getItem("Player2");
        var img2 = localStorage.getItem("img2");

        document.getElementById("headline2").textContent = "Get ready to play!";

        document.getElementById("characterP2").innerHTML += `
                                                                    <img  class="card-img-chosen" alt="icon of chosen character" src="${img2} "/>
                                                                    <h2 class="player-name">Player 2</h2>
                                                                    <h3 class="playerTitle">${player2}</h3> `;
        playersBox.style.display = "block";

        setTimeout(function () {
          playersBox.style.display = "none";
          window.location.replace("boardgame.html");
        }, 1500);
      }
    };
  }
}

var container = document.querySelector("#cards");

container.innerHTML = "";
var id;
var src;

function renderChar() {
  container.innerHTML = "";

  charJson.forEach(function (character) {
    id = character.id;
    src = character.src;

    container.innerHTML += `
                                <div class="card">
                                    <div data-id="${id}" data-src="${src}"class="card-box"> 
                                    <img alt="${character.alt}" class="card-img" src="${src}"</img>
                                    
                                    <div class="title-box">
                                    <h2 class="title">${character.title}</h2>
                                    <p class="alias"> ${character.aliases}</p>
                                    <p class="description">This character is known for ${character.skills}</p>
                                    </div>
                                   
                                    <button type="button" class="selectBtn red-btn" onclick="chosen()"> select </button>
                                </div>
                            </div>`;
  });
}

renderChar();

const cards = document.querySelectorAll(".card > div");
const btn = document.querySelectorAll("selectBtn");

const playersBox = document.getElementById("players-box");
let playerDisplay = document.querySelectorAll("player-col");
let counter = 0;

playerDisplay.innerHTML = "";

window.addEventListener("click", function (event) {
  if (event.target == playersBox) {
    playersBox.style.display = "none";
  }
});
