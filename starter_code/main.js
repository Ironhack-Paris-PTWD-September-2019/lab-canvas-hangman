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
  const letter = code2letter(code);
  console.log('code', code);

  if(hangman.checkIfLetter(code)) {
    // key is a letter
    if(hangman.checkClickedLetters(letter)) {
      // key has not yet been clicked

      var index = hangman.secretWord.indexOf(letter);

      if(index !== -1) {
        // letter is in the secretword
        hangman.addCorrectLetter(index);
        hangmanCanvas.writeCorrectLetter(index);
        if(hangman.checkWinner()) {
          console.log('winner');
          // WE HAVE A WINNER
          hangmanCanvas.winner();
        }
      } else {
        // letter is not in the secretword
        hangman.addWrongLetter(letter);
        hangmanCanvas.writeWrongLetter(letter,hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);

        if(hangman.checkGameOver()) {
          // GAME LOST
          hangmanCanvas.gameOver();
        }
      }
    } else {
      // key has already been clicked
    }
  } else {
      // key is not a letter
  }
};
