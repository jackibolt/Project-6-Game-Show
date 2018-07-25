
// Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const letter = document.querySelectorAll('.letter');
const scoreBoardImgs = document.querySelectorAll('.tries img');

let missed = 0;

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


// FUNCTIONS STORED IN VARIABLES

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

// RFunction = get random phrase, store array of characters in variable
characters = getRandomPhraseAsArray(phrases);
console.log(characters)
// RFunction = add characters to display
addPhraseToDisplay(characters);

// let letterFound = null;

// check if selected letter matches a character in the phrase
const checkLetter = (e) => {
  const letter = document.querySelectorAll('.letter');   //  <--- WHY DOES THIS FUNCTION BREAK W/O "LETTER" INSIDE IT?
  const selected = e.target;
  // let letterFound = null;
  for (i=0; i<letter.length; i+=1) {
    if (selected.textContent === letter[i].textContent) {
      letter[i].classList.add('show');
      const match = letter[i].textContent;
      let letterFound = true;
      // console.log(letterFound);
    } else {
      let letterFound = null;
    }
  }
  // console.log(letterFound);
  // return letterFound;
}

const gameResult = () => {
  const show = document.querySelectorAll('.show');
  if (show.length === letter.length) {
    //show winning screen
  }
}

//RUN FUNCTIONS

// Click handler for buttons on screen keyboard
qwerty.addEventListener('click', (e) => {
      // disable chosen buttons
  if (e.target.tagName === 'BUTTON') {
    e.target.classList.add('chosen');
    e.target.setAttribute('disabled', 'true');
  }
      // RFunction to compare letters & buttons
  checkLetter(e);

      // increase "missed" total & change heart color
      let matched = null; // <--- just using this to continue testing code. Doesn't belong there.
  if (matched === null) {
    missed += 1;
    i = missed;
    scoreBoardImgs[i-1].setAttribute('src', 'images/lostHeart.png');
  }
});
