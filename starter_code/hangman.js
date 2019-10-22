

const words= ['marijuana', 'ironHack', 'docker', 'kubernetes', 'avion', 'guitare','definition'];
// const alphabet = {
//   65: 'a',
//   66: 'b',
//   67: 'c',
//   68: 'd',
//   69: 'e',
//   70: 'f',
//   71: 'g',
//   72: 'h',
//   73: 'i',
//   74: 'j',
//   75: 'k',
//   76: 'l',
//   77: 'm',
//   78: 'n',
//   79: 'o',
//   80: 'p', 
//   81: 'q',
//   82: 'r',
//   83: 's',
//   84: 't',
//   85: 'u',
//   86: 'v',
//   87: 'w',
//   88: 'x',
//   89: 'y',
//   90: 'z',
// }

class Hangman {
 
  constructor() {
    this.words=words;
    this.secretWord='';
    this.letters=[];
    this.guessedLetter='';
    this.errorsLeft=10;

 }

  getWord() {
    this.secretWord=this.words[Math.floor(Math.random()*this.words.length)];
    return this.secretWord;

  }

  checkIfLetter(keyCode) {
    if (keyCode>64 && keyCode<91) {
      return true;
    }
    return false; 

 }

  checkClickedLetters(key) {
    if (this.letters.indexOf(key)===-1) { 
      return true; } 
    return false;
}

addCorrectLetter(index) {
 this.guessedLetter += this.secretWord[index].toUpperCase();
 this.checkWinner(); 
 }

addWrongLetter(letter) {
  this.errorsLeft -=1;
  this.letters.push(letter);
  this.checkGameOver();
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

//  document.getElementById('start-game-button').onclick = () => {
//   hangman = new Hangman();
// };

// document.onkeydown = (e) => {

// };