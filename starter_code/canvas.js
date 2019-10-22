
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord=secretWord;
    this.x=300;
    this.y=600;
    this.startX=650;
    this.startY= 200; 
  }

  createBoard() {
    this.ctx.clearRect(0,0,800,1200);

  }

  drawLines() {
    
    this.ctx.beginPath();
    this.ctx.lineWidth=3.5;
    for (let i=0; i<this.secretWord.length; i++){
      this.ctx.moveTo(this.x+i*10+i*40,this.y);
      this.ctx.lineTo(this.x+i*10+i*40 + 40,this.y);
    
    }
    this.ctx.stroke();
    this.ctx.closePath();

  }

  writeCorrectLetter(index) {
    let letter= this.secretWord[index].toUpperCase();
  
    this.ctx.font = '40px serif';
    this.ctx.fillText(letter,this.x+index*50,this.y-5); 

  }

  writeWrongLetter(letter, errorsLeft) {
  
    this.ctx.font = '40px serif';
    this.ctx.fillText(letter,this.startX+(10-errorsLeft)*50,this.startY); 

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}