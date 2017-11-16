var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.getElementById("total");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

var p1NameInput= document.querySelector("#p1NameInput");
var p2NameInput = document.getElementById("p2NameInput");
var p1NameDisplay = document.querySelector("#p1NameDisplay");
var p2NameDisplay = document.querySelector("#p2NameDisplay");

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
};

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
	console.log("Reset");
});

p1NameInput.addEventListener("change", function(){
	p1NameDisplay.textContent = this.value;
	p1Button.textContent = this.value;
	console.log("p1NameInput" + " is " + this.value)
});


p2NameInput.addEventListener("change", function(){
	p2NameDisplay.textContent = this.value;
	p2Button.textContent = this.value;
	console.log("p2NameInput" + " is " + this.value)
});

