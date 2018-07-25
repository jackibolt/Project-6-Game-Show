
// Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');

const phrases = [
  "The bees knees",
  "The cats pajamas",
  "The lions share",
  "Ants in your pants",
  "Straight from the horses mouth",
  "An elephant in the room",
  "Wild goose chase",
  "As the crow flies",
  "Kangaroo court",
  "Swan song"
];

// Start Game
startGame.addEventListener('click', () => {
  const overlay = document.querySelector('#overlay');
  overlay.style.display = 'none';
});

// Function selects a random phrase from array
const getRandomPhraseAsArray = (arr) => {
  // create a random number
  const randomNumber = Math.floor(Math.random()*arr.length);
  // select a random object from the array, w/ the random number
  const selection = arr[randomNumber];
  const selectionLower = selection.toLowerCase();
  // turn that phrase into array of individual characters
  const characters = selectionLower.split("");
  return characters;
}

// adds characters of an array to the display, and adds classes
const addPhraseToDisplay = (arr) => {
  for (i=0; i<arr.length; i+=1){
    const li = document.createElement('li');
    li.textContent = arr[i];
    if (li.textContent !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
    const ul = document.querySelector('#phrase');
    ul.appendChild(li);
  }
}

// get random phrase, store array of characters
characters = getRandomPhraseAsArray(phrases);
console.log(characters)
// add characters to display
addPhraseToDisplay(characters);

// let matched = null;

// check if selected letter matches a character in the phrase
const checkLetter = (e) => {
  const selected = e.target;
  const letter = document.querySelectorAll('.letter');
  // let matched = null;
  for (i=0; i<letter.length; i+=1) {
    if (selected.textContent === letter[i].textContent) {
      letter[i].classList.add('show');
      const match = letter[i].textContent;
      let matched = true;
      // console.log(matched);
    } else {
      let matched = null;
    }
  }
  // console.log(matched);
  return matched;
}

qwerty.addEventListener('click', (e) => {
      // disable chosen buttons
  if (e.target.tagName === 'BUTTON') {
    e.target.classList.add('chosen');
    e.target.setAttribute('disabled', 'true');
  }
      // run checkLetter function
  checkLetter(e);
      // add to scoreBoard
  if (matched === null) {
    const scoreBoard = document.querySelector('#scoreboard');
    console.log(scoreBoard);
  }
});
