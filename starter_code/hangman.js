function code2letter(code) {
  //
  // function that convert a keycode into a letter (see: https://keycode.info)
  //
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[code - 65]; 
}

class Hangman {
  constructor() {
      this.words = ["CHOUCROUTE", "SAUCISSE", "CHOCOLAT", "PATATE", "ALSACE"];
      this.secretWord = this.getWord();
      this.letters = [];
      this.guessedLetter = "";
      this.errorsLeft =10;
  }

  getWord() {
  return this.words[Math.floor(Math.random()*this.words.length)]
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90){return true}
    else return false;
  }

  checkClickedLetters(key) {
    if (this.letters.indexOf(key) !== -1){return false}
    else return true;
  }

  addCorrectLetter(i) {
    const correctLetter = this.secretWord[i];
    this.guessedLetter += correctLetter.toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft = this.errorsLeft - 1 ;
    this.checkGameOver();
   }
   checkGameOver() {
     if (this.errorsLeft===0){
       return true
     } else return false

  }

  checkWinner() {
    if (this.secretWord.length === this.guessedLetter.length){ return true}
    else return false;
  }
 }