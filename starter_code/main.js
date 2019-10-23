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
	hangmanCanvas.drawLines();
	// hangmanCanvas.writeCorrectLetter(2);
	// hangmanCanvas.writeWrongLetter("a", 10);
	// hangmanCanvas.drawHangman(10);
	// hangmanCanvas.drawHangman(9);
	// hangmanCanvas.drawHangman(8);
	// hangmanCanvas.drawHangman(7);
	// hangmanCanvas.drawHangman(6);
	// hangmanCanvas.drawHangman(5);
	// hangmanCanvas.drawHangman(4);
	// hangmanCanvas.drawHangman(3);
	// hangmanCanvas.drawHangman(2);
	// hangmanCanvas.drawHangman(1);
	// hangmanCanvas.gameOver();
	// hangmanCanvas.winner();
};

// GAME
document.onkeydown = e => {
	const code = e.which;
	console.log("code", code);
	// var lettre = alphabet[code - 65];

	// while (!hangman.checkGameOver()) {
	// 	if (hangman.checkIfLetter(code)) {
	// 		if (hangman.checkClickedLetters(lettre)) {
	// 			hangman.addCorrectLetter(hangman.secretWord.indexOf(lettre));
	// 			hangmanCanvas.writeCorrectLetter(
	// 				hangman.secretWord.indexOf(lettre)
	// 			);
	// 			// Manque repet lettres
	// 		} else {
	// 			hangman.addWrongLetter(lettre);
	// 			hangmanCanvas.writeWrongLetter(lettre, hangman.errorsLeft);
	// 		}
	// 	}
	// 	if (hangman.checkWinner()) {
	// 		hangmanCanvas.winner();
	// 	}
	// }
	// hangmanCanvas.gameOver();
};
