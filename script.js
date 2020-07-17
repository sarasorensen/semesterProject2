//scroll to characters
let button = document.getElementById("button");

button.addEventListener("click", function (event) {
  document
    .getElementById("card-row")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  event.stopPropagation();
});

const char = [
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
var displayedChar = char;

var container = document.querySelector("#cards");

container.innerHTML = "";

function renderChar() {
  container.innerHTML = "";

  displayedChar.forEach(function (character) {
    container.innerHTML += `
    <div onClick="char_click(this.id)" id=${character.id} class="card">
        <img   alt="${character.alt}" class="card-img"  src="${character.imageUrl}"</img>
        <div class="card-box"> 

        <div class="title-box">
        <h3 class="title">${character.title}</h3>
        <p class="alias"> ${character.aliases}</p>
        </div>

        <p class="description">This character is known for ${character.skills}</p>
        <button type="button" onClick="char_click(this.id)">Select</button>
        </div>
        </div>`;
  });
}

renderChar();

//display box when char clicked
const playersBox = document.getElementById("players-box");

function char_click(clicked_id) {
  playersBox.style.display = "block";

  console.log(clicked_id);
}

//Close window if user clicks outside it
window.onclick = function (event) {
  if (event.target == playersBox) {
    playersBox.style.display = "none";
  }
};
