// let hangman;

// class Hangman {
//   constructor() {
//     this.words = ["coucou", "bonjour", "au revoir"];
//     this.secretWord = this.getWord();
//     this.letters = [];
//     this.guessedLetters = "";
//     this.errorsLeft = 10;
//   }

//   getWord() {
//     return this.words[Math.floor(Math.random() * this.words.length)];
//   }

//   checkIfLetter(keyCode) {
//     let checkLetter = false;
//     if (keyCode > 64 && keyCode < 91) {
//       checkLetter = true;
//       return checkLetter;
//     } else {
//       return checkLetter;
//     }
//   }

//   checkClickedLetters(key) {
//     let letterUsed = true;
//     if (this.letters.indexOf(key) === -1) {
//       return letterUsed;
//     } else {
//       letterUsed = false;
//       return letterUsed;
//     }
//   }

//   //   addCorrectLetter(i) {

//   //   }

//   //   addWrongLetter(letter) {

//   //   }

//   //   checkGameOver() {

//   //   }

//   //   checkWinner() {

//   //   }

// }

function code2letter(code) {
  //
  // function that convert a keycode into a letter (see: https://keycode.info)
  //
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[code - 65];
}

class Hangman {
  constructor() {
    this.words = ["HELLO", "IRONHACK", "COMPUTER"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    const letter = code2letter(keyCode);

    return letter ? true : false;
  }

  checkClickedLetters(letter) {
    const notAlreadyTyped = this.letters.indexOf(letter) === -1; // can't find `letter` into `this.letters`

    if (notAlreadyTyped) {
      this.letters.push(letter);
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(index) {
    const correctLetter = this.secretWord[index];

    this.guessedLetter += correctLetter.toUpperCase(); // store the uppercase version
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    //this.checkGameOver();
  }

  checkGameOver() {
    return this.errorsLeft < 1;
  }

  checkWinner() {
    return (
      this.guessedLetter
        .toUpperCase()
        .split("")
        .sort()
        .join("") ===
      this.secretWord
        .toUpperCase()
        .split("")
        .sort()
        .join("")
    );
  }
}
