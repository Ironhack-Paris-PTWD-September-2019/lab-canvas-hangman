
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.ctx.fillStyle="white";
    this.ctx.fillRect(0,0,400,1200);
    this.ctx.lineWidth=8;
    this.ctx.stroleStyle="black";
  }

  drawLines() {
    var repeat= 0;
    var startLine=100;
    this.ctx.beginPath();
    while (repeat<=hangman.getWord().length){
      this.ctx.moveTo(startLine,300);
      this.ctx.lineTo(startLine+40,300);
      repeat+=1
      startLine+=70
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }

  // writeCorrectLetter(index) {

  // }

  // writeWrongLetter(letter, errorsLeft) {

  // }

  // drawHangman(shape) {

  // }

  // gameOver() {

  // }

  // winner() {

  // }

}