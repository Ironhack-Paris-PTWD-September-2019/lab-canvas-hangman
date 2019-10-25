
class Hangman {
  constructor() {
    this.words = ['IRONHACK', 'IRONHACK', 'IRONHACK'];
    this.secretWord="";
    this.letters = [];
    this.secretWord = this.getWord();
    this.guessedLetter = "";
    this.errorsLeft = 10;
    this.hangmanCanvas=new HangmanCanvas (this.secretWord); 
  }

  getWord() {
    var random= Math.floor(Math.random()*this.words.length);
    return this.words [random];
  }

  checkIfLetter(keyCode) {
    return keyCode > 64 && keyCode < 91;
  }

  checkClickedLetters(key) {
    return this.letters.indexOf(key.toUpperCase()) == -1;
  }

  addCorrectLetter(i) {
    this.hangmanCanvas.writeCorrectLetter(i);
    this.guessedLetter += this.secretWord[i].toUpperCase();
    if (this.checkWinner()) { console.log('winner'); }
    if (this.checkWinner()) {
    this.hangmanCanvas.winner();
    this.clearGame();
  }
};

  addWrongLetter(letter) {
    this.hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
    this.errorsLeft--;
    if (this.checkGameOver()) { console.log('looser'); }
    if (this.checkGameOver()) {
      this.hangmanCanvas.gameOver();
      this.clearGame();
    }
  };
  
  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return this.guessedLetter.length === this.secretWord.length;
  }
};

