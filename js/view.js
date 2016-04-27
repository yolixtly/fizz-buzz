var $ = require('jquery');
var pickNumber = require('./modal.js');

// CODE TO MAKE SURE THE USER DOESNT INPUT a NaN and Decimals as well:
function startTheGame() {
	var inputValue = $('#userInput').val();
	// If the number is NaN like ("five" instead of 5), then:
	if (isNaN(inputValue)) {
		inputValue = prompt("Please pick a number instead of a word: ", +"");
	}
	// If the number is not an integer like ("5.5" instead of 5), then:
	while ((inputValue % 1) != 0) {
		inputValue = prompt("pick a number that has no decimals: ", +"");
	}
	//if input is an Integer then just run your game!!: 
	$("#refactor").html(''); 
	$("#refactor").append("Playing Fizz-Buzz Game from 1 to " + inputValue + "<br/>");
	//calling the function
	$("#refactor").append(pickNumber(inputValue));
};

module.exports = startTheGame;