
// Variables
const qwerty = document.getElementById('qwerty');
const keyboardBtn = document.querySelectorAll('.keyrow button');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const scoreBoardImgs = document.querySelectorAll('.tries img');
const overlay = document.querySelector('#overlay');
const title = document.querySelector('.title');
const letter = document.querySelectorAll('.letter');
const ul = phrase.querySelector('ul');
const phraseLi = ul.querySelectorAll('li');

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
startBtn.addEventListener('click', () => {
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
  const characterList = selectionLower.split("");
  return characterList;
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
    ul.appendChild(li);
  }
}

// RunFunction = get random phrase, store array of characters in variable
const characters = getRandomPhraseAsArray(phrases);
console.log(characters)
// RunFunction = add characters to display
addPhraseToDisplay(characters);


// check if selected letter matches a character in the phrase
const checkLetter = (e) => {
  let letterFound = null;
  const letter = document.querySelectorAll('.letter');   //  <--- WHY DOES THIS FUNCTION BREAK W/O "LETTER" INSIDE IT?
  const selected = e.target;
  for (i=0; i<letter.length; i+=1) {
    if (selected.textContent === letter[i].textContent) {
      letter[i].classList.add('show');
      const match = letter[i].textContent;
      letterFound = true;
    }
  }
  return letterFound;
}


// checks to see if guessed all letters correctly, show win image
const checkWin = () => {
  const show = document.querySelectorAll('.show');
  const letter = document.querySelectorAll('.letter');
  if (show.length === letter.length) {
    console.log('WAHOOO');
    overlay.style.display = 'flex';
    overlay.classList.add('win');
    title.textContent = 'You win!'
    startBtn.textContent = 'Play again';
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
      // RunFunction to compare letters & buttons
  checkLetter(e);
  matched = checkLetter(e);
      // change heart color & increase "missed" total
  if (e.target.tagName === 'BUTTON' && matched === null) {
    i = missed;
    scoreBoardImgs[i].setAttribute('src', 'images/lostHeart.png');
    missed += 1;
  }

  if (missed === 5) {
    console.log('I SAD');
    overlay.style.display = 'flex';
    overlay.classList.add('lose');
    title.textContent = 'Nope, sorry.'
    startBtn.textContent = 'Play again';
  }

  checkWin();
});


startBtn.addEventListener('click', (e) => {
  if (e.target.textContent === 'Play again') {
    overlay.style.display = 'none';

    // score back to zero
    missed = 0
    console.log (missed);

    // reset hearts
    for (i=0; i<scoreBoardImgs.length; i+=1) {
      scoreBoardImgs[i].setAttribute('src', 'images/liveHeart.png');
    }

    // remove list items
    const li = phrase.querySelectorAll('li');
    for (i=0; i<li.length; i+=1) {
      ul.removeChild(li[i]);
    }

    // remove class and attribute from keyboard buttons
    for (i=0; i<keyboardBtn.length; i+=1) {
      keyboardBtn[i].classList.remove('chosen');
      keyboardBtn[i].disabled = false;
    }

    // remove classes from overlay
    overlay.classList.remove('win', 'lose');

    //generate new random phrase
    const characters = getRandomPhraseAsArray(phrases);
    console.log(characters)

    // Add characters to display
    addPhraseToDisplay(characters);
  }
});
