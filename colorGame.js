var numSquares=6;

var colors = generateRandomColors(numSquares);
//hanyadik négyzet
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

//ez a span, ami a htmlben van
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeButtons =document.querySelectorAll(".mode");

for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numSquares=3;
		}else{
			numSquares=6;
		} 
		reset();
	});
}

function reset(){
		colors = generateRandomColors(numSquares);
	//random szín a tömbből
	pickedColor = pickColor();
	//egyezzen
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Colors";

	messageDisplay.textContent=""
	for(var i = 0; i < squares.length; i++) {
	if(colors[i]){
		squares[i].style.display="block";
		squares[i].style.background=colors[i];
	} else{
		squares[i].style.display="none";
	}
}
	h1.style.background = "steelblue";
}

//id helyett class-al megoldva
/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares =3;
	colors=generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i <squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		} else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);

	pickedColor= pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i <squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
	}
});

*/

resetButton.addEventListener("click", function() {
	//új szín
	colors = generateRandomColors(numSquares);
	//random szín a tömbből
	pickedColor = pickColor();
	//egyezzen
	colorDisplay.textContent = pickedColor;
	this.textContent="New Colors";

	messageDisplay.textContent=""
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// színek a négyzetekhez
	squares[i].style.background = colors[i];

	//klikkre történő alert
	squares[i].addEventListener("click", function() {
	
		var clickedColor = this.style.background;
		//klikkre, kiírni helyes-e
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
//ha helyesre kattintunk az összes szine átvált
function changeColors(color) {

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//tömb
	var arr = [];
	//aszámh hozzáadása a tömbhöz
	for(var i = 0; i < num; i++) {

		arr.push(randomColor());
	}
	//visszaad
	return arr;
}

function randomColor() {
	//red
	var r = Math.floor(Math.random() * 256);
	//green
	var g = Math.floor(Math.random() * 256);
	//blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
