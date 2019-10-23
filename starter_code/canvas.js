class HangmanCanvas {
	constructor(secretWord) {
		this.canvas = document.getElementById("hangman");
		this.ctx = this.canvas.getContext("2d");
		this.secretWord = secretWord;

		// PARAMETRES
		this.lineStyle = {
			size: 80,
			space: 20,
			xOffset: 350,
			yOffset: 280
		};
		this.correctStyle = {
			charWidth: 80,
			space: 20,
			xOffset: 350,
			yOffset: 270
		};
		this.incorrectStyle = {
			charWidth: 40,
			space: 10,
			xOffset: 500,
			yOffset: 50
		};
		this.imagePosition = {
			x: 500,
			y: 0
		};
	}

	createBoard() {
		this.ctx.fillStyle = "white";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawLines() {
		this.ctx.strokeStyle = "#9DA400";
		this.ctx.lineWidth = 3;

		for (let i = 0; i < this.secretWord.length; i++) {
			easyLine(
				this.ctx,
				(this.lineStyle.size + this.lineStyle.space) * i +
					this.lineStyle.xOffset,
				this.lineStyle.yOffset,
				(this.lineStyle.size + this.lineStyle.space) * i +
					this.lineStyle.xOffset +
					this.lineStyle.size,
				this.lineStyle.yOffset
			);
		}
		this.ctx.strokeStyle = "black";
		easyLine(
			this.ctx,
			0,
			this.lineStyle.yOffset,
			200,
			this.lineStyle.yOffset
		);
	}

	writeCorrectLetter(index) {
		this.ctx.font = "bold 50px sans-serif";
		this.ctx.fillStyle = "#9DA400";
		this.ctx.textAlign = "center";
		this.ctx.fillText(
			this.secretWord[index].toUpperCase(),
			(this.correctStyle.charWidth + this.correctStyle.space) * index +
				this.correctStyle.xOffset +
				this.correctStyle.charWidth / 2,
			this.correctStyle.yOffset
		);
	}

	writeWrongLetter(letter, errorsLeft) {
		this.drawHangman(errorsLeft);
		this.ctx.font = "40px sans-serif";
		this.ctx.fillStyle = "black";
		this.ctx.textAlign = "start";
		this.ctx.fillText(
			letter.toUpperCase(),
			(this.incorrectStyle.charWidth + this.incorrectStyle.space) *
				(10 - errorsLeft) +
				this.incorrectStyle.xOffset,
			this.incorrectStyle.yOffset
		);
	}

	drawHangman(shape) {
		this.ctx.strokeStyle = "black";
		switch (shape) {
			case 9:
				easyLine(
					this.ctx,
					0,
					this.lineStyle.yOffset,
					100,
					this.lineStyle.yOffset - 50
				);
				break;
			case 8:
				easyLine(
					this.ctx,
					100,
					this.lineStyle.yOffset - 50,
					200,
					this.lineStyle.yOffset
				);
				break;
			case 7:
				easyLine(this.ctx, 100, this.lineStyle.yOffset - 50, 100, 5);
				break;
			case 6:
				easyLine(this.ctx, 100, 5, 300, 5);
				break;
			case 5:
				easyLine(this.ctx, 300, 5, 300, 50);
				break;
			case 4:
				easyArc(this.ctx, 300, 70, 20);
				break;
			case 3:
				easyLine(this.ctx, 300, 90, 300, 170);
				break;
			case 2:
				easyLine(this.ctx, 300, 170, 270, 200);
				break;
			case 1:
				easyLine(this.ctx, 300, 170, 330, 200);
				break;
			default:
				break;
		}
	}

	gameOver() {
		var gameOverImage = document.createElement("img");
		gameOverImage.src = "./images/gameover.png";
		this.ctx.drawImage(
			gameOverImage,
			this.imagePosition.x,
			this.imagePosition.y
		);
	}

	winner() {
		var winnerImage = document.createElement("img");
		winnerImage.src = "./images/awesome.png";
		this.ctx.drawImage(
			winnerImage,
			this.imagePosition.x,
			this.imagePosition.y,
			winnerImage.width * 0.5,
			winnerImage.height * 0.5
		);
	}
}

// HELPER functions
function easyLine(context, x0, y0, xF, yF) {
	context.beginPath();
	context.moveTo(x0, y0);
	context.lineTo(xF, yF);
	context.stroke();
	context.closePath();
}

function easyArc(context, x0, y0, r) {
	context.beginPath();
	context.arc(x0, y0, r, 0, Math.PI * 2);
	context.stroke();
	context.closePath();
}
