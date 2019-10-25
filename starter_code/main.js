var hangman;
var hangmanCanvas;

var $start = document.getElementById('start-game-button');
$start.onclick = function () {
  // console.log('starting');
  
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  console.log('SECRET WORD', hangman.secretWord);
  console.log(hangman.errorsLeft);
  hangmanCanvas.drawLines();
};

document.onkeydown = (e) => {
  const code = e.which;
  // console.log('code', code);
  const Letter = code2letter(code);

  if (hangman.checkIfLetter(code)) {
    console.log('LETTER', Letter);  

  if (hangman.checkClickedLetters(Letter)){
    hangman.letters.push(Letter);
    // console.log(hangman.letters);
    
    var test = false;

    for (i=0;i<hangman.secretWord.length;i++){
      
      if (Letter === hangman.secretWord[i]){
        //console.log('Letter', Letter);
        hangman.addCorrectLetter(i);
        hangmanCanvas.writeCorrectLetter(i);
        console.log('GUESSED LETTERS', hangman.guessedLetter);
        test = true;
      }
    }

    if (test === false){
      hangman.addWrongLetter(Letter);
      hangmanCanvas.writeWrongLetter(Letter, hangman.errorsLeft)
      hangmanCanvas.drawHangman(10-hangman.errorsLeft);
    }
    console.log(hangman.errorsLeft);

    if (hangman.checkGameOver()){
      hangmanCanvas.gameOver();
    }

    if (hangman.checkWinner()){
      hangmanCanvas.winner();
    }

  } else console.log("Deja utilisé");
}


}