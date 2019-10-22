var hangman;
var hangmanCanvas;

var $start = document.getElementById('start-game-button');
$start.onclick = function () {
  console.log('starting');
  
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
};

document.onkeydown = (e) => {
  const code = e.which;
  let letter;
  if(hangman.checkIfLetter(code)){
    letter= alphabet[code];
    console.log('Letter typed is ', letter);
    if(hangman.checkClickedLetters(letter)) {
      let index= hangman.secretWord.indexOf(letter);
      index>=0? hangman.addCorrectLetter(index) : addWrongLetter(letter);
    }
  } 

  

  //
  // your turn ;)
  //
};
