
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.ctx.fillStyle = "black";
    this.word = secretWord;
  }
    
  createBoard() {
    this.ctx.clearRect(800,1200);
  }

  drawLines() {
    let x = 0;
    for (var i=0; i<this.word.length;i++){
      this.ctx.fillRect(400 + x, 600, 40, 5);
      x = x + 50;
    }
    
  }

  writeCorrectLetter(index) {
    this.ctx.font = "40px Georgia";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(this.word[index],410 + 50*index,580)
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = "30px Georgia";
    this.ctx.fillStyle = "gray";
    this.ctx.fillText(letter,700 + 50*(10-errorsLeft),100)
  }

  drawHangman(shape) {
    switch (shape) {
      case 1:
        this.ctx.fillRect(150, 600, 150, 2);
        break;
      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(150, 600);
        this.ctx.lineTo(225, 550);
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      case 3:
          this.ctx.beginPath();
          this.ctx.moveTo(300, 600);
          this.ctx.lineTo(225, 550);
          this.ctx.closePath();
          this.ctx.stroke();
        break;
      case 4:
        this.ctx.fillRect(225, 50, 2, 500);
        break;
      case 5:
        this.ctx.fillRect(225, 50, 300, 2);
        break;
      case 6:
        this.ctx.fillRect(525, 50, 2, 50);
        break;
      case 7:
        this.ctx.beginPath();
        this.ctx.arc(525,140,40,0,2*Math.PI);
        this.ctx.stroke();
        break;
      case 8:
        this.ctx.fillRect(525, 180, 2, 150);
        break;
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(525, 330);
        this.ctx.lineTo(475, 380);
        this.ctx.closePath();
        this.ctx.stroke();        
        break;
      case 10:
        this.ctx.beginPath();
        this.ctx.moveTo(525, 330);
        this.ctx.lineTo(575, 380);
        this.ctx.closePath();
        this.ctx.stroke();  
        break;
      default:
        console.log("Game Over");
  }}

  gameOver() {
    this.ctx.drawImage(document.getElementById("gameover"),50,50);

  }

  winner() {
    this.ctx.drawImage(document.getElementById("awesome"),50,50);

  }

}