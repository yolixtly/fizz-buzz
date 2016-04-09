(function(){
console.log("hello Yolix");

//Refactor Challenged 

runGame();

//rendering the list of numbers until the number picked by the user 

function pickNumber(userChoice) {
	var hola = "";
	for (var i = 1; i <= userChoice; i++) {
		// hola = ""; //as initially had it, it would have loged empty and do not run whats next
		if ((i % 3 === 0) && (i % 5 !== 0)) {
			hola += "<strong> fizz </strong>" + "<br/>";
		}
		else if ((i % 5 === 0) && (i % 3 !== 0)) {
			hola += "<strong> buzz </strong>" + "<br/>";
		}
		else if ((i % 5 && i % 3) === 0) {
			hola += "<strong> FIZZ-BUZZ </strong>" + "<br/>";
		}
		else {
			hola += i + "<br/>";
		}
	}
	return hola;
};

// CODE TO MAKE SURE THE USER DOESNT INPUT a NaN and Decimals as well:
function startTheGame() {
	var inputValue = $('#userInput').val();
	// inputValue = parseInt(inputValue); 	

	// If the number is NaN like ("five" instead of 5), then:
	if (isNaN(inputValue)) {
		inputValue = prompt("Please pick a number instead of a word: ", +"");
	}

	// If the number is not an integer like ("5.5" instead of 5), then:
	while ((inputValue % 1) != 0) {
		inputValue = prompt("pick a number that has no decimals: ", +"");
	}

	//if input is an Integer then just run your game!!: 
	$("#refactor").html(''); //clean everything before running the next;
	$("#refactor").append("Playing Fizz-Buzz Game from 1 to " + inputValue + "<br/>");

	//calling the function


	$("#refactor").append(pickNumber(inputValue));
};
function runGame() {
	$('#btn').click(function(){
		startTheGame();
		$('#userInput').val('');
	});

};

}());