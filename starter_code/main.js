var hangman=new Hangman();
var hangmanCanvas=new HangmanCanvas(hangman.getWord());
var positionWrongLetter=0;

var $start = document.getElementById('start-game-button');
$start.onclick = function () {
  console.log('starting');
  
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
  //hangmanCanvas.drawHangman()
};

document.onkeydown = (e) => {
  var code = e.which;
  var nbMatches = hangman.secretWord.length;


  if ( (!hangman.checkGameOver()) && (!hangman.checkWinner())) {
    if ((hangman.checkIfLetter(code)===true) && (hangman.checkClickedLetters(code)===true)) {
      
      for (var i=0; i < hangman.secretWord.length; i++) {

        if (code2letter(code)===hangman.secretWord[i]) {
          hangmanCanvas.writeCorrectLetter(code2letter(code),i);
          hangman.addCorrectLetter(i);
        } else {
          nbMatches -=1;
        }
      }

      if (nbMatches===0) {
        hangmanCanvas.writeWrongLetter(code2letter(code),positionWrongLetter);
        positionWrongLetter+=1;
        hangman.addWrongLetter();
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }

    }
  };

  if (hangman.checkGameOver()) {hangmanCanvas.gameOver()};
  if (hangman.checkWinner()) {hangmanCanvas.winner()};

};
