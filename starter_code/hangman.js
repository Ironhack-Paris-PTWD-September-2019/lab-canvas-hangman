let hangman;

class Hangman {
	constructor() {
		this.words = ["MICHEL", "Ironhack", "IRONHACK"];
		this.secretWord = this.getWord();
		this.letters = [];
		this.guessedLetter = "";
		this.errorsLeft = 10;
	}

	getWord() {
		return this.words[
			Math.floor(Math.random() * this.words.length)
		].toUpperCase();
	}

	checkIfLetter(keyCode) {
		return keyCode >= 65 && keyCode <= 90 ? true : false;
	}

	checkClickedLetters(key) {
		return this.letters.indexOf(key.toUpperCase()) !== -1 ? false : true;
	}

	addCorrectLetter(i) {
		const correctLetter = this.secretWord[i];
		this.guessedLetter += correctLetter.toUpperCase();
	}

	addWrongLetter(letter) {
		this.letters.push(letter.toUpperCase());
		this.errorsLeft--;
	}

	checkGameOver() {
		return this.errorsLeft === 0 ? true : false;
	}

	checkWinner() {
		let allLettersGuessed = true;
		for (let i = 0; i < this.secretWord.length; i++) {
			if (this.guessedLetter.indexOf(this.secretWord[i]) === -1) {
				allLettersGuessed = false;
			}
		}

		return this.errorsLeft > 0 && allLettersGuessed ? true : false;
	}
}
