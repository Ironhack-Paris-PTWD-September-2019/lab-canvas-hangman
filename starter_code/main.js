var hangman;
var hangmanCanvas;

var $start = document.getElementById('start-game-button');
$start.onclick = function () {
  console.log('starting');
  
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  console.log(hangman.secretWord);
};



document.onkeydown = (e) => {
  const code = e.which;
  console.log('code', code);
  const Letter = code2letter(code);

  if (hangman.checkIfLetter(code)) {
    console.log(Letter);  

  if (hangman.checkClickedLetters(Letter)){
    console.log("Yo");
    hangman.letters.push(Letter);
    for (i=0;i<hangman.secretWord.length;i++){
      if (Letter === hangman.secretWord[i]){
        hangman.addCorrectLetter(Letter);
        console.log(hangman.guessedLetter);
      }
    }
  } else console.log("Deja utilisé");

}}