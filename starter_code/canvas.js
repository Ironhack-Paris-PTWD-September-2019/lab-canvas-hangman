
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord=secretWord; 
    this.createBoard();
    this.drawLines();
  }


  createBoard() {
    this.ctx.clearRect(0, 0, 800, 1200); 
    this.ctx.lineWidth = 5;

  }

  drawLines() {
    var longueur = 20 ;
    var depart = 100 ; 
    for (var i = 0 ; i < this.secretWord.length ; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(depart, 600);
      this.ctx.lineTo(depart+longueur, 600);
      depart += 5 ; 
      this.ctx.stroke();
    }
        
  }

//   writeCorrectLetter(index) {

//   }

//   writeWrongLetter(letter, errorsLeft) {

//   }

//   drawHangman(shape) {

//   }

//   gameOver() {

//   }

//   winner() {

//   }

}