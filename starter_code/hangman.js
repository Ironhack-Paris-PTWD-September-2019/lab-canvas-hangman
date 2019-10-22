

const words= ['MARIJUANA', 'IRONHACK', "MAGNIFIQUE", 'JALOUX', 'MAINSTREAM', 'GUITARE','HOOLIGAN'];
const alphabet = {
  65: 'A',
  66: 'B',
  67: 'C',
  68: 'D',
  69: 'E',
  70: 'F',
  71: 'G',
  72: 'H',
  73: 'I',
  74: 'J',
  75: 'K',
  76: 'L',
  77: 'M',
  78: 'N',
  79: 'O',
  80: 'P', 
  81: 'Q',
  82: 'R',
  83: 'S',
  84: 'T',
  85: 'U',
  86: 'V',
  87: 'W',
  88: 'X',
  89: 'Y',
  90: 'Z',
}

class Hangman {
 
  constructor() {
    this.words=words;
    this.secretWord=this.getWord();
    this.letters=[];
    this.guessedLetter='';
    this.errorsLeft=10;

 }

  getWord() {
    let secretWord=this.words[Math.floor(Math.random()*this.words.length)];
    return secretWord;

  }

  checkIfLetter(keyCode) {
    if (keyCode>64 && keyCode<91) {
      return true;
    }
    return false; 

 }

  checkClickedLetters(key) {
    if (this.letters.indexOf(key)===-1) { 
      this.letters.push(key);
      return true; } 
    return false;
}

  addCorrectLetter(index) {
  this.guessedLetter += this.secretWord[index].toUpperCase();
  return this.checkWinner(); 
  }

  addWrongLetter(letter) {
    this.errorsLeft -=1;
    
    return this.checkGameOver();
  }

  checkGameOver() {
    if(this.errorsLeft===0) { return true; };
    return false; 
    }

  checkWinner() {
    if(this.guessedLetter.split('').sort().join('')===this.secretWord.split('').sort().join('')) {return true; }
    return false;
    }

 }










