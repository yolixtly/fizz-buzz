var $ = require('jquery');
var startTheGame = require('./view.js');

(function(){
console.log("this is Fizz-buzz");

//Refactor Challenged 

runGame();

function runGame() {
	$('#btn').click(function(){
		startTheGame();
		$('#userInput').val('');
	});

};
}());