var $ = require('jquery');
var pickNumber = require('./modal.js');

// CODE TO MAKE SURE THE USER DOESNT INPUT a NaN and Decimals as well:
var startTheGame = () => {
	var inputValue = $('#userInput').val();
	// If the number is NaN like ("five" instead of 5), then:
	if (isNaN(inputValue)) {
		inputValue = prompt("Please pick a number instead of a word: ", +"");
	};
  	while ((inputValue % 1) != 0) {
		inputValue = prompt("pick a number that has no decimals: ", +"");
	}
	$("#refactor").html(''); //clean everything before running the next;
	$("#refactor").append("Playing Fizz-Buzz Game from 1 to " + inputValue + "<br/>");

	//calling the function
	$("#refactor").append(pickNumber(inputValue));
};

module.exports = startTheGame;