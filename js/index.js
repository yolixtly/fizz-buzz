var $ = require('jquery');
var startTheGame = require('./view.js');

(function(){
console.log("hello Yolix");

//Refactor Challenged 

runGame();

function runGame() {
	$('#btn').click(function(){
		startTheGame();
		$('#userInput').val('');
	});

};
}());