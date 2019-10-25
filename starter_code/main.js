var hangman;
var hangmanCanvas;

var $start = document.getElementById('start-game-button');
$start.onclick = function () {
  console.log('starting');
  
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)

  hangman.getWord();
  hangman.checkIfLetter();
  hangman.checkClickedLetters();
  hangman.addCorrectLetter();
  hangman.addWrongLetter();
  hangman.checkGameOver();
  hangman.checkWinner();
  hangmanCanvas.drawLines();
  hangmanCanvas.writeCorrectLetter();
  hangmanCanvas.drawHangman();
  hangmanCanvas.gameOver();
  hangmanCanvas.winner();

};

function getPos(key){
  return hangman.secretWord.toUpperCase().indexOf(key);
}

document.onkeydown = function (e) {
  if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key)) {
    var key = e.key.toUpperCase();
    hangman.letters.push(key);
    var indexes = [];
    pos = getPos(key);
    if (pos === -1) {
      hangman.addWrongLetter(key);
    } else {
      indexes.push(getPos(key));

      while (pos !== -1) {
        indexes.push(hangman.secretWord.toUpperCase().indexOf(key, pos + 1));
        pos = hangman.secretWord.toUpperCase().indexOf(key, pos + 1);
      }
      for (i = 0; i < indexes.length - 1; i++) {
        hangman.addCorrectLetter(indexes[i]);
      }
    }
  }
};
