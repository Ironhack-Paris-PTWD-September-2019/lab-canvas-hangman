
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord=secretWord;
    this.x=250;
    this.y=600;
  }

  createBoard() {
    this.ctx.clearRect(0,0,800,1200);

  }

  drawLines() {

    this.ctx.beginPath(); 
    this.ctx.moveTo(this.x,this.y);
    for (let i=0; i<this.secretWord.length; i++){

      this.ctx.lineTo(this.x+40,this.y);
      this.ctx.moveTo(this.x+i*5+i*40,this.y);
      this.ctx.stroke();
    }

    this.ctx.closePath();

  }

  writeCorrectLetter(index) {
    let letter= this.secretWord[index].toUpperCase(); 
    this.ctx.beginPath();
    this.ctx('letter',this.x+index*45,this.y-5, 40); 
    this.ctx.closePath(); 

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