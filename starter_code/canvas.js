
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
    
    
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 800, 1200);
  }

  drawLines() {

    this.ctx.beginPath();
    this.ctx.rect(0, 0, 800, 1200);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.closePath();
  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}