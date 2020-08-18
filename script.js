//scroll to characters
let button = document.getElementById("button");

button.addEventListener("click", function (event) {
  document
    .getElementById("card-row")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  event.stopPropagation();
});

const charJson = [
  {
    title: "Cersei Lannister",
    aliases: "The Queen",
    skills: "mind games, persuasiveness & control of kingdoms.",
    src: "images/characters/char-cer.png",
    alt: "image of an illustrated character with long blonde hair",
    id: "Cersei",
  },
  {
    title: "Arya Stark",
    aliases: "Wolf girl",
    skills: "assassination skills, patience, changing faces & martial arts.",
    src: "images/characters/char-ari.png",
    alt: "image of an illustrated character with short hair",
    id: "Arya",
  },
  {
    title: "Jamie Lannister",
    aliases: "Kingslayer",
    skills: "warfare, swords, money & charisma.",
    src: "images/characters/char-jam.png",
    alt: "image of an illustrated character with blonde hair",
    id: "Jamie",
  },
  {
    title: "Khal Drogo",
    aliases: "Dothraki Leader",
    skills: "most feared and strongest of the Khals, a good leader.",
    src: "images/characters/char-ka.png",
    alt: "image of an illustrated character with a beard",
    id: "Khal",
  },
  {
    title: "Jon Snow",
    aliases: "King in the north",
    skills: "warfare, swords, riding dragons & likeability",
    src: "images/characters/char-jon.png",
    alt: "image of an illustrated character with a mustache and black hair",
    id: "Jon",
  },
  {
    title: "Melisandre",
    aliases: "The Red Woman",
    skills: "witchcraft, speaking to gods & wisdom.",
    src: "images/characters/char-meli.png",
    alt: "image of an illustrated character with a red dress",
    id: "Melisandre",
  },
  {
    title: "Grey Worm",
    aliases: "Master of War",
    skills: "commander of the Unsullied, warrior & loyalty.",
    src: "images/characters/char-wor.png",
    alt: "image of an illustrated character with soldier clothes.",
    id: "Grey",
  },
  {
    title: "Sansa",
    aliases: "Queen of the North",
    skills: "mind games, leading the North & Survivor.",
    src: "images/characters/char-san.png",
    alt: "image of an illustrated character with long red hair.",
    id: "Sansa",
  },
  {
    title: "Daenerys Targaryen",
    aliases: "Mother of Dragons",
    skills: "dragons, freeing slaves, warfare & fire.",
    src: "images/characters/char-dan.png",
    alt: "image of an illustrated character with longe white hair",
    id: "Daenerys",
  },
  {
    title: "Tyrion Lannister",
    aliases: "The Imp",
    skills: "charisma, knowledge & the hand of Daenerys Targaryen.",
    src: "images/characters/char-tyr.png",
    alt: "image of an illustrated character with brown hair.",
    id: "Tyrion",
  },
];

//display characters
var displayedChar = charJson;
var container = document.querySelector("#cards");

container.innerHTML = "";
var id;
var src;

function renderChar() {
  container.innerHTML = "";

  displayedChar.forEach(function (character) {
    id = character.id;
    src = character.src;
    //console.log(id);

    container.innerHTML += `
    <div class="card">
        <div data-id="${id}" data-src="${src}"class="card-box"> 
        <img alt="${character.alt}" class="card-img" src="${src}"</img>

        <div class="title-box">
        <h2 class="title">${character.title}</h2>
        <p class="alias"> ${character.aliases}</p>
        <p class="description">This character is known for ${character.skills}</p>
        </div>
        <button class="red-btn" id="importantBtn" onclick="chosen()"> select </button>
</div>
 </div>`;
  });
}

renderChar();

const cards = document.querySelectorAll(".card > div");
const btn = document.getElementById("importantBtn");

const playersBox = document.getElementById("players-box");
let playerDisplay = document.querySelectorAll("player-col");
let counter = 0;

playerDisplay.innerHTML = "";

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

          document.getElementById("headline2").textContent = "choose player 2";

          document.getElementById("characterP1").innerHTML += `
                <img  class="card-img-chosen" alt="icon of chosen character" src="${img1} "</img>
                <h2 class="player-name">Player 1</h2>
                <h3 class="playerTitle">${player1}</h3> `;
          playersBox.style.display = "block";
          setTimeout(function () {
            playersBox.style.display = "none";
          }, 3500);
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
              <img  class="card-img-chosen" alt="icon of chosen character" src="${img2} "</img>
              <h3 class="player-name">Player 2</h3>
              <h3 class="playerTitle">${player2}</h3> `;
        playersBox.style.display = "block";
        setTimeout(function () {
          playersBox.style.display = "none";
          window.location.replace("boardgame.html");
        }, 3500);
      }
    };
  }
}

//Close window if user clicks outside it
window.addEventListener("click", function (event) {
  if (event.target == playersBox) {
    playersBox.style.display = "none";
  }
});
