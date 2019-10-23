
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord=secretWord;
    this.x=280;
    this.y=700;
    this.startX=650;
    this.startY= 200;
    this.gOverImg = new Image();   // Create new <img> element
    this.gOverImg.src = 'images/gameover.png';
    this.createBoard();
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800);

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
    this.ctx.fillText(letter,this.startX+(10-errorsLeft)*45,this.startY); 

  }

  drawHangman(errorsLeft) {
    switch(errorsLeft) {
      case 9 : 
        this.ctx.beginPath();
        this.ctx.lineWidth=3.5;
        this.ctx.moveTo(this.x-50,this.y); // (230,600)
        this.ctx.lineTo(this.x-200,this.y); // (80,600)
        this.ctx.lineTo(155,this.y-70);
        this.ctx.closePath();
        this.ctx.stroke();
        break; 

      case 8 :
        this.ctx.beginPath();
        this.ctx.lineWidth=3.5;
        this.ctx.moveTo(155,this.y-70);
        this.ctx.lineTo(155, this.y -580);
        this.ctx.closePath();
        this.ctx.stroke();
        break; 

      case 7: 
        this.ctx.beginPath();
        this.ctx.lineWidth=3.5;
        this.ctx.moveTo(155, this.y -580);
        this.ctx.lineTo(this.startX -200, this.y -580);
        this.ctx.closePath();
        this.ctx.stroke();
        break; 

      case 6: 
        this.ctx.beginPath();
        this.ctx.lineWidth=3.5;
        this.ctx.moveTo(this.startX -200, this.y -580);
        this.ctx.lineTo(this.startX -200, this.y -520);
        this.ctx.closePath();
        this.ctx.stroke();
        break; 

      case 5: 
        this.ctx.beginPath();
        this.ctx.lineWidth=3.5;
        this.ctx.arc(this.startX -200, this.y -480, 40, 0, Math.PI*2);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      
      case 4:
        this.ctx.beginPath();
        this.ctx.lineWidth=3.5;
        this.ctx.moveTo(this.startX -200, this.y -440);
        this.ctx.lineTo(this.startX -200, this.y -240); // line of 200 
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      
      case 3:
        this.ctx.beginPath();
        this.ctx.lineWidth=3.5;
        this.ctx.moveTo(this.startX -200, this.y -240);
        this.ctx.lineTo(this.startX -270, this.y -170); // shift 70 to the left, 70 down 
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      
      case 2:
        this.ctx.beginPath();
        this.ctx.lineWidth=3.5;
        this.ctx.moveTo(this.startX -200, this.y -240);
        this.ctx.lineTo(this.startX -130, this.y -170); // shift 70 to the right, 70 down 
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      
      case 1:
          this.ctx.beginPath();
          this.ctx.lineWidth=3.5;
          this.ctx.moveTo(this.startX -200, this.y -380);
          this.ctx.lineTo(this.startX -140, this.y -320); // shift 60 to the right, 60 down 
          this.ctx.closePath();
          this.ctx.stroke();
          break;   
    }

  }

  gameOver() {
    
    this.ctx.beginPath();
    this.ctx.lineWidth=3.5;
    this.ctx.moveTo(this.startX -200, this.y -380);
    this.ctx.lineTo(this.startX -260, this.y -320); // shift 60 to the left, 60 down 
    this.ctx.closePath();
    this.ctx.stroke();


    this.ctx.drawImage(this.gOverImg,400,300,570,240);
          

  }

  winner() {

  }

}