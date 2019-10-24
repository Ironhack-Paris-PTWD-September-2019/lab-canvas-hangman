var hangman;
var hangmanCanvas;

var $start = document.getElementById("start-game-button");
$start.onclick = function() {
  console.log("starting");
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
};

document.onkeydown = e => {
  const code = e.which;
  console.log("code", code);

  if (this.secretWord.indexOf(code) === -1) {
    console.log(code, errorsLeft);
  } else {
    console.log(this.secretWord[i]);
  }
};
