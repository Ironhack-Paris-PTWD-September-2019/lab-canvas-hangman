
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.createBoard();
    this.drawLines();
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800);
    this.ctx.lineWidth=5;
    

  }
  
  drawLines() {
    this.ctx.beginPath(); 
    this.ctx.moveTo(200,750)
    this.ctx.lineTo(250,750)
    this.ctx.stroke()
    this.ctx.moveTo(270,750)
    this.ctx.lineTo(320,750)
    this.ctx.stroke()
    this.ctx.moveTo(340,750)
    this.ctx.lineTo(390,750)
    this.ctx.stroke()
    this.ctx.moveTo(410,750)
    this.ctx.lineTo(460,750)
    this.ctx.stroke()
    this.ctx.moveTo(480,750)
    this.ctx.lineTo(530,750)
    this.ctx.stroke()
    this.ctx.moveTo(550,750)
    this.ctx.lineTo(620,750)
    this.ctx.stroke()
    this.ctx.moveTo(640,750)
    this.ctx.lineTo(690,750)
    this.ctx.stroke()
    this.ctx.moveTo(710,750)
    this.ctx.lineTo(760,750)
    this.ctx.stroke()

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