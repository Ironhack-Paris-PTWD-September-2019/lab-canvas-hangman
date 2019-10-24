class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.createBoard();
    this.drawLines(secretWord);
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 800, 1200);
  }

  drawLines(secretWord) {
    var x = 100;
    var a = 0;
    for (let i = 0; i < secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 50);
      this.ctx.lineTo((x += 20), 50);
      this.ctx.stroke();
      this.ctx.closePath();
      x += 20;
    }
  }

  writeCorrectLetter(index) {}

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}
