var hangman;
var hangmanCanvas;

// KEY
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// START
var $start = document.getElementById("start-game-button");
$start.onclick = function() {
	console.log("starting");

	hangman = new Hangman();
	hangmanCanvas = new HangmanCanvas(hangman.secretWord);
	hangmanCanvas.createBoard();
	hangmanCanvas.drawLines();
	// TEST HANGMAN
	// for (let j = 10; j > 0; j--) {
	// 	hangmanCanvas.drawHangman(j);
	// }
};

// GAME
document.onkeydown = e => {
	const code = e.which;
	var lettre = alphabet[code - 65];

	if (hangman.checkIfLetter(code)) {
		if (hangman.checkClickedLetters(lettre)) {
			if (hangman.secretWord.indexOf(lettre) !== -1) {
				hangman.addCorrectLetter(hangman.secretWord.indexOf(lettre));
				hangmanCanvas.writeCorrectLetter(
					hangman.secretWord.indexOf(lettre)
				);
				if (hangman.checkWinner()) {
					// console.log("WIN");
					hangmanCanvas.winner();
				}
			} else {
				hangman.addWrongLetter(lettre);
				hangmanCanvas.writeWrongLetter(lettre, hangman.errorsLeft);
				if (hangman.checkGameOver()) {
					// console.log("FAIL");
					hangmanCanvas.gameOver();
				}
			}
		}
	}
};
