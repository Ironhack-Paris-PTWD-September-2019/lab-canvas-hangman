
class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d');
    this.secretWord=secretWord;
    this.loseImage=new Image();
    this.loseImage.src="images/gameover.png";
    this.winnerImage=new Image();
    this.winnerImage.src="images/awesome.png"
  }

  createBoard() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {
    for (var i=0; i < this.secretWord.length; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(200+i*110,750); 
      this.ctx.lineTo(300+i*110,750); 
      this.ctx.stroke();
    }
  }

  writeCorrectLetter(letter,position) {
    this.ctx.font="50px Georgia";
    this.ctx.fillText(letter,200+position*110,740);
  }

  writeWrongLetter(letter,position) {
    this.ctx.font="50px Georgia";
    this.ctx.fillText(letter,700+position*50,150);
  }
  

  drawHangman(errorsLeft) {
    switch(errorsLeft) {
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(50,750);
        this.ctx.lineTo(150,750);
        this.ctx.stroke();
        break;
      
      case 8:
        this.ctx.moveTo(50,750);
        this.ctx.lineTo(100,700);
        this.ctx.stroke();
        break;

      case 7:
        this.ctx.moveTo(100,700);
        this.ctx.lineTo(150,750);
        this.ctx.stroke();
        break;

      case 6:
        this.ctx.moveTo(100,700);
        this.ctx.lineTo(100,50);
        this.ctx.stroke();
        break;

      case 5:
        this.ctx.moveTo(100,50);
        this.ctx.lineTo(500,50);
        this.ctx.stroke();
        break;

      case 4:
        this.ctx.moveTo(500,50);
        this.ctx.lineTo(500,100);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 3:
        this.ctx.beginPath();
        this.ctx.arc(500,150,50,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(500,200);
        this.ctx.lineTo(500,450);
        this.ctx.stroke();
        break;

      case 1:
        this.ctx.lineTo(380,550);
        this.ctx.stroke();
        this.ctx.moveTo(500,450);
        this.ctx.lineTo(620,550);
        this.ctx.stroke();
        break;
    }
  }

  gameOver() {
  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  this.ctx.drawImage(this.loseImage,0,0);
  }

  winner() {
  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  this.ctx.drawImage(this.winnerImage,0,0);
  }

}