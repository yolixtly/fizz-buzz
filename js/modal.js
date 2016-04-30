var $ = require('jquery');

//rendering the list of numbers until the number picked by the user 
var pickNumber = userChoice => {
  let listNumber = "";
  for (let i =1; i <= userChoice; i++) {
    listNumber += (i % 3 === 0) && (i % 5 !== 0) ? "<strong> fizz </strong>" + "<br/>" :
    (i % 5 === 0) && (i % 3 !== 0) ? "<strong> buzz </strong>" + "<br/>" : 
    (i % 5 && i % 3) === 0 ? "<strong> FIZZ-BUZZ </strong>" + "<br/>" : i + "</br>";
  }
	return listNumber;
};

module.exports = pickNumber;