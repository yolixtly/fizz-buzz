var $ = require('jquery');

//rendering the list of numbers until the number picked by the user 
function pickNumber(userChoice) {
	var listOfNumbers = "";
	for (var i = 1; i <= userChoice; i++) {
		if ((i % 3 === 0) && (i % 5 !== 0)) {
			listOfNumbers += "<strong> fizz </strong>" + "<br/>";
		}
		else if ((i % 5 === 0) && (i % 3 !== 0)) {
			listOfNumbers += "<strong> buzz </strong>" + "<br/>";
		}
		else if ((i % 5 && i % 3) === 0) {
			listOfNumbers += "<strong> FIZZ-BUZZ </strong>" + "<br/>";
		}
		else {
			listOfNumbers += i + "<br/>";
		}
	}
	return listOfNumbers;
};

module.exports = pickNumber;