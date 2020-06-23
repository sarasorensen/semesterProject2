var char = [
  {
    title: "Cersei Lannister",
    aliases: "The Queen.",
    skills: "Mind games, persuasive & control.",
    imageUrl: "images/characters/char-cer.png",
    alt: "image of a rocket",
    id: 1,
  },
  {
    title: "Arya Stark",
    aliases: "Wolf girl or The Blind girl.",
    skills: "Assassination skills, patient & martial arts.",
    imageUrl: "images/characters/char-ari.png",
    alt: "image of a rocket",
    id: 2,
  },
  {
    title: "Jamie Lannister",
    aliases: "Kingslayer.",
    skills: "Warfare, swords & charisma.",
    imageUrl: "images/characters/char-jam.png",
    alt: "image of a rocket",
    id: 3,
  },
  {
    title: "Khal Drogo",
    aliases: "Dothraki Leader",
    skills: "Most feared and strongest warrier of the Khals.",
    imageUrl: "images/characters/char-ka.png",
    alt: "image of a rocket",
    id: 4,
  },
  {
    title: "Jon Snow",
    aliases: "King in the north.",
    skills: "Warfare, swords & likeable.",
    imageUrl: "images/characters/char-jon.png",
    alt: "image of an illustrated character with a mustache and black hair",
    id: 5,
  },
  {
    title: "Melisandre",
    aliases: "The Red Woman.",
    skills: "Witchcraft & wisdom.",
    imageUrl: "images/characters/char-meli.png",
    alt: "image of a rocket",
    id: 6,
  },
  {
    title: "Grey Worm",
    aliases: "Master of War.",
    skills: "Commander from the Unsullied & Loyalty.",
    imageUrl: "images/characters/char-wor.png",
    alt: "image of a rocket",
    id: 7,
  },
  {
    title: "Sansa",
    aliases: "Queen of the North.",
    skills: "Mindgames & Survivor.",
    imageUrl: "images/characters/char-san.png",
    alt: "image of a rocket",
    id: 8,
  },
  {
    title: "Daenerys Targaryen",
    aliases: "Mother of Dragons.",
    skills: "Dragons & fire.",
    imageUrl: "images/characters/char-dan.png",
    alt: "image of a rocket",
    id: 9,
  },
  {
    title: "Tyrion Lannister",
    aliases: "The Imp or Halfman.",
    skills: "Charisma & the hand of Daenerys.",
    imageUrl: "images/characters/char-tyr.png",
    alt: "image of a rocket",
    id: 10,
  },
];

var displayedChar = char;

var container = document.querySelector("#cards");

container.innerHTML = "";

function renderChar() {
  container.innerHTML = "";

  displayedChar.forEach(function (character) {
    container.innerHTML += `
    <div class="card">
        <h3>${character.title}</h3>
        <img onclick="displayImage(this);" alt="${character.alt}" class="card-img"  src="${character.imageUrl}"</img>
        <p>Also known as ${character.aliases}</p>
        <p >Some known skills are: ${character.skills}</h2>
        </div>`;
  });
}

renderChar();
