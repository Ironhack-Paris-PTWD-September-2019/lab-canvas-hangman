
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 800, 1200);
  }

  drawLines() {
    this.ctx.beginPath();
    this.ctx.moveTo(50, 50);
    this.ctx.lineTo(250, 50);
    this.ctx.stroke();
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