const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;
let numCorrect = 0;

// Loop over the chars in `word` and create divs.
// this created the black lines

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
}; //wont be inserted until the guess....the css is literally just black lines
//"for every letter of word..we insert for __ amount of words"

// Loop over each letter in `ALPHABET` and generate buttons.
// manipulating the DOM using JS (aka tree of html objects) to make it interactive

// DOM is the tree of html object….DOM is unhidden front end ventriloquism…its the puppetry of HTML via JS…
// change a lil here dynamically to get a whole lot of interactivity  done

const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) { //for loop
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
}; //creates entire alphabet of buttons...were inserting things into html..and telling where "before end" and what "char" 
//....UNITL (FOR LOOP) we reach end of alphabet



// Set the `disabled` property of `buttonEl` to `true.
// `buttonEl` is an `HTMLElement` object.
// manipulating the DOM using JS (aka tree of html objects) to make it interactive

const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};


const disableAllLetterButtons = () => {
  const buttons = document.querySelectorAll('button')

  for (const button of buttons) {
    button.disabled = true;
  }
}
// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter, word) => {
  // This should take in a string, letter, which is always a character in the word. Finish handleCorrectGuess so it updates the contents of the appropriate divs from createDivsForChars with letter.
  const clickedLetter = document.querySelectorAll(`div.${letter}`);
  for(const div of clickedLetter) {
   div.innerHTML = letter;
   numCorrect += 1;
  }

  if (numCorrect === word.length) { 
    disableAllLetterButtons();
    document.querySelector('#win').style.display = 'block';
  }
};




//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};






// This is like if __name__ == '__main__' in Python
// initializes games, powers/implements every function and action we just created, and ends games

(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello'; //testing purposes...itll be random when we play and each time

  createDivsForChars(word); //black lines
  generateLetterButtons(); //show boxes with alaphebet

  for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', (evt) => {
      const clickedBtn =evt.target; 
      disableLetterButton(clickedBtn)

      const letter = clickedBtn.innerHTML
     
      if (isLetterInWord(letter)) { //call pre-made func.
        handleCorrectGuess();
      } else {
        handleWrongGuess();
      }
    });
    }
    
    //evt. target tells u which button triggered event
    //evt is paremeter...were making an arrow func
  
    
      
    }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
)();
