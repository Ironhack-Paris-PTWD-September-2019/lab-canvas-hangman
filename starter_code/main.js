var hangman;
var hangmanCanvas;

var $start = document.getElementById('start-game-button');
$start.onclick = function () {
  console.log('starting');
  
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)

  hangmanCanvas.drawLines();
};

document.onkeydown = (e) => {
  const code = e.which;
  console.log('code', code);

  //
  // your turn ;)
  //
};
