
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;

    this.createBoard();
    this.drawLines();
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800);
    this.ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    this.ctx.fillRect(0,0,1200,800);
    this.ctx.lineWidth = 5;
  }

  drawLines() {  
    var xInit = 250;
    var yInit = 700;
    var wordWidth = 50;
    var marginWord = 10;

    this.ctx.beginPath();
    this.ctx.moveTo(xInit,yInit);
    for (var i = 0; i <= this.secretWord.length; i++) {
      this.ctx.lineTo(xInit+wordWidth*i,yInit); 
      this.ctx.moveTo(xInit+wordWidth*i+marginWord,yInit);
    };
    this.ctx.closePath();
    this.ctx.stroke();    
  }

  writeCorrectLetter(index) {
    var xInit = 250;
    var yInit = 700;
    var wordWidth = 50;
    var marginWord = 15;
    var letter = this.secretWord[index];

    this.ctx.font = '50px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(letter, xInit+wordWidth*index+marginWord, yInit-marginWord);
  }

  writeWrongLetter(letter, errorsLeft) {
    var xInit = 600;
    var yInit = 200;
    var wordWidth = 50;
    var marginWord = 15;
    var errorIndex = 10-errorsLeft;

    this.ctx.font = '50px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(letter, xInit+wordWidth*errorIndex+marginWord, yInit-marginWord);
  }

  drawHangman(errorsLeft) {
    this.ctx.beginPath();

    switch(errorsLeft) {
      case 9:
        this.ctx.moveTo(50,700);
        this.ctx.lineTo(200,700);
        this.ctx.lineTo(125,650);
        this.ctx.lineTo(50,700);
        break;
      case 8:
        this.ctx.moveTo(125,650);
        this.ctx.lineTo(125,100);
        break;
      case 7:
        this.ctx.moveTo(125,100);
        this.ctx.lineTo(450,100);
        break;
      case 6:
        this.ctx.moveTo(200,100);
        this.ctx.lineTo(125,175);
        break;
      case 5:
        this.ctx.moveTo(450,100);
        this.ctx.lineTo(450,150);
        this.ctx.moveTo(490,190);
        this.ctx.arc(450, 190, 40, 0, Math.PI * 2);
        break;
      case 4:
        this.ctx.moveTo(450,230);
        this.ctx.lineTo(450,410);
        break;
      case 3:
        this.ctx.moveTo(450,410);
        this.ctx.lineTo(520,490);
        break;
      case 2:
        this.ctx.moveTo(450,410);
        this.ctx.lineTo(380,490);
        break;
      case 1:
        this.ctx.moveTo(450,280);
        this.ctx.lineTo(520,320);
        break;
      case 0:
        this.ctx.moveTo(450,280);
        this.ctx.lineTo(380,320);
        break;
    }

    this.ctx.stroke();
  }

  gameOver() {
    var x = 0;
    var y = 0;

    const img = document.createElement('img');
    img.onload = () => {
      this.ctx.clearRect(0, 0, 1200, 800);
      this.ctx.drawImage(img, x, y, 1200, 800);
    };
    img.src = "images/gameover.png";  
  }

  winner() {
    var x = 0;
    var y = 0;

    const img = document.createElement('img');
    img.onload = () => {
      this.ctx.clearRect(0, 0, 1200, 800);
      this.ctx.drawImage(img, x, y, 1200, 800);
    }
    img.src = "images/awesome.png";  
  }

}