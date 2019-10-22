// let hangman;

function code2letter(code) {
  //
  // function that convert a keycode into a letter (see: https://keycode.info)
  //
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[code - 65]; 
}

class Hangman {
  constructor() {
    this.words = ['IRONHACK', 'IRONHACK', 'IRONHACK'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)];
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
    return (this.errorsLeft < 1);
  }

  checkWinner() {
    return this.guessedLetter.toUpperCase().split('').sort().join('') === this.secretWord.toUpperCase().split('').sort().join('');
  }

}

// il reste les fonctions add correct et add wrong à faire, le reste fonctionne 

// class Hangman {
//    constructor() {
//       this.words=['bonjour','bonsoir', 'salut']; 
//       this.secretWord=''; 
//       this.letters=[];
//       this.guessedLetter=''; 
//       this.errorsLeft=10;

//    }

//     getWord() {
//       this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]; 
//       return this.secretWord; 
//     }


//     checkIfLetter(keyCode) {
//       if (keyCode>64 && keyCode<91){
//         return true ;
//       } else return false ; 
//     }
 
//     checkClickedLetters(key) {
//       if (this.letters.indexOf(key)===-1) return true ; 
//         else return false; 
//       }

//     checkGameOver() {
//         if (this.errorsLeft===0) return true ;
//           else return false; 
//       }

//     checkWinner() {
//       if (this.secretWord.length===this.guessedLetter.length) return true ; 
//         else return false ;   
//       }

//     addCorrectLetter(index) {
//         const correctLetter = this.secretWord[index];
//         this.guessedLetter += correctLetter.toUpperCase(); 
//       }
    
//     addWrongLetter(letter) {
//         this.errorsLeft -= 1;
//         this.checkGameOver();
//       }
//   ​
// }