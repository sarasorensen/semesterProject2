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
    imageUrl: "images/characters/char-cer.png",
    alt: "image of an illustrated character with long blonde hair",
    id: "Cersei",
  },
  {
    title: "Arya Stark",
    aliases: "Wolf girl",
    skills: "assassination skills, patience, changing faces & martial arts.",
    imageUrl: "images/characters/char-ari.png",
    alt: "image of an illustrated character with short hair",
    id: "Arya",
  },
  {
    title: "Jamie Lannister",
    aliases: "Kingslayer",
    skills: "warfare, swords, money & charisma.",
    imageUrl: "images/characters/char-jam.png",
    alt: "image of an illustrated character with blonde hair",
    id: "Jamie",
  },
  {
    title: "Khal Drogo",
    aliases: "Dothraki Leader",
    skills: "most feared and strongest of the Khals, a good leader.",
    imageUrl: "images/characters/char-ka.png",
    alt: "image of an illustrated character with a beard",
    id: "Khal",
  },
  {
    title: "Jon Snow",
    aliases: "King in the north",
    skills: "warfare, swords, riding dragons & likeability",
    imageUrl: "images/characters/char-jon.png",
    alt: "image of an illustrated character with a mustache and black hair",
    id: "Jon",
  },
  {
    title: "Melisandre",
    aliases: "The Red Woman",
    skills: "witchcraft, speaking to gods & wisdom.",
    imageUrl: "images/characters/char-meli.png",
    alt: "image of an illustrated character with a red dress",
    id: "Melisandre",
  },
  {
    title: "Grey Worm",
    aliases: "Master of War",
    skills: "commander of the Unsullied, warrior & loyalty.",
    imageUrl: "images/characters/char-wor.png",
    alt: "image of an illustrated character with soldier clothes.",
    id: "Grey",
  },
  {
    title: "Sansa",
    aliases: "Queen of the North",
    skills: "mind games, leading the North & Survivor.",
    imageUrl: "images/characters/char-san.png",
    alt: "image of an illustrated character with long red hair.",
    id: "Sansa",
  },
  {
    title: "Daenerys Targaryen",
    aliases: "Mother of Dragons",
    skills: "dragons, freeing slaves, warfare & fire.",
    imageUrl: "images/characters/char-dan.png",
    alt: "image of an illustrated character with longe white hair",
    id: "Daenerys",
  },
  {
    title: "Tyrion Lannister",
    aliases: "The Imp",
    skills: "charisma, knowledge & the hand of Daenerys Targaryen.",
    imageUrl: "images/characters/char-tyr.png",
    alt: "image of an illustrated character with brown hair.",
    id: "Tyrion",
  },
];

//display characters
var displayedChar = charJson;
var container = document.querySelector("#cards");

container.innerHTML = "";

function renderChar() {
  container.innerHTML = "";

  displayedChar.forEach(function (character) {
    container.innerHTML += `
    <div class="card" >
        <img onClick="select(this.id, this.src)" id="${character.id}" alt="${character.alt}" class="card-img" src="${character.imageUrl} "</img>
        <div class="card-box"> 

        <div class="title-box">
        <h3 class="title">${character.title}</h3>
        <p class="alias"> ${character.aliases}</p>
        </div>

        <p class="description">This character is known for ${character.skills}</p>
        <button class="button2" type="button" >Select</button>
        </div>
        </div>`;
  });
}
renderChar();

const playersBox = document.getElementById("players-box");
let playerDisplay = document.querySelectorAll("player-col");
let counter = 0;

playerDisplay.innerHTML = "";

function select(id, src) {
  console.log(id, src);

  if (counter < 2) {
    counter++;
    if (counter === 1) {
      localStorage.setItem("Player1", id);
      localStorage.setItem("img1", src);

      var player1 = localStorage.getItem("Player1");
      var img1 = localStorage.getItem("img1");

      document.getElementById("headline2").textContent =
        "Please select player 2";
      document.getElementById("characterP1").innerHTML += `
          <img  class="card-img" alt="icon of chosen character" src="${img1} "</img>
          <h3>${player1}</h3> `;
      playersBox.style.display = "block";
      setTimeout(function () {
        playersBox.style.display = "none";
      }, 3000);
    } else {
      localStorage.setItem("Player2", id);
      localStorage.setItem("img2", src);

      var player2 = localStorage.getItem("Player2");
      var img2 = localStorage.getItem("img2");

      document.getElementById("headline2").textContent = "Get ready to play!";
      document.getElementById("characterP2").innerHTML += `
        <img  class="card-img" alt="icon of chosen character" src="${img2} "</img>
        <h3>${player2}</h3> `;
      playersBox.style.display = "block";
      setTimeout(function () {
        playersBox.style.display = "none";
      }, 2500);

      setTimeout(function () {
        window.location.replace("boardgame.html");
      }, 1000);
    }
  }
}

//Close window if user clicks outside it
window.addEventListener("click", function (event) {
  if (event.target == playersBox) {
    playersBox.style.display = "none";
  }
});
