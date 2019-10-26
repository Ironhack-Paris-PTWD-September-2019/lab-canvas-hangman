var hangman;
var hangmanCanvas;

var $start = document.getElementById('start-game-button');
$start.onclick = function () {
  console.log('starting');
  
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.drawLines();
};

document.onkeydown = (e) => {
  const code = e.which;
  let letter;
  let win; 
  if(hangman.checkIfLetter(code)){
    letter= alphabet[code];
    console.log('Letter typed is ', letter);
    if(hangman.checkClickedLetters(letter)) {
      // Loop through the different indexes of the letter in the word 
      let indexes=[]; 
      for (let i=0; i<hangman.secretWord.length; i++){
        if(hangman.secretWord[i]===letter) {
          indexes.push(i);
        }
      }
      
      if(indexes.length>0) {
        indexes.forEach(index => {
          win=hangman.addCorrectLetter(index);
          hangmanCanvas.writeCorrectLetter(index);});
        
        //console.log("the letter " + letter + " is in word " + hangman.secretWord);
        if(win) {
          hangmanCanvas.winner();
          document.onkeydown=null;}
      } else {
        let game=hangman.addWrongLetter(letter);
        //console.log("the letter " + letter + " is not in word " + hangman.secretWord);
        if(game) {
          hangmanCanvas.gameOver();
          document.onkeydown=null;
        } else {
          hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
          hangmanCanvas.drawHangman(hangman.errorsLeft);
        }
      }
    } else {
      alert("You already typed the letter " + letter);
    }
  } else {
    alert("Please type a letter");
  } 

  

  //
  // your turn ;)
  //
};
