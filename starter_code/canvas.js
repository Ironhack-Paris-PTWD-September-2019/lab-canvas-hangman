class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.createBoard();
    this.drawLines();
  }

  createBoard() {
    //this.ctx.fillStyle = "red";
    this.ctx.clearRect(0, 0, 800, 1200);
  }

  drawLines() {
    var path = ctx.beginPath();

    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath(700, 100);
      this.ctx.lineTo(700, 100);
      // this.ctx.stroke();
      // this.ctx.moveTo();
      //this.ctx.beginPath();
    }
  }

  writeCorrectLetter(index) {}

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}
