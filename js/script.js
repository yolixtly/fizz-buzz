console.log("hello Yolix");

//Refactor Challenged try 2

	//rendering the list of numbers until the number picked by the user 

	function pickNumber(userChoice) {
		var hola = "";
		for (var i = 1; i <= userChoice; i++) {
			// hola = ""; //as initially had it, it would have loged empty and do not run whats next
			if ((i % 3 === 0) && (i % 5 !== 0)) {
			hola += "<strong> fizz </strong>" + "<br/>";
			} else if ((i % 5 === 0) && (i % 3 !== 0)) {
			hola += "<strong> buzz </strong>" + "<br/>";
			} else if((i % 5 && i % 3) === 0){
			hola += "<strong> FIZZ-BUZZ </strong>" + "<br/>";
			} else {
				hola += i + "<br/>";
			}	
		}
		return hola;
	};

// CODE TO MAKE SURE THE USER DOESNT INPUT a NaN and Decimals as well:

		var inputValue = prompt("Please pick a number: ", +"");
		// inputValue = parseInt(inputValue); 	

		// If the number is NaN like ("five" instead of 5), then:
		if (isNaN(inputValue)) { 
			inputValue = prompt("Please pick a number instead of a word: ", +"");
		} 

		// If the number is not an integer like ("5.5" instead of 5), then:
		while((inputValue % 1) != 0) {
			inputValue = prompt("pick a number that has no decimals: ", +"");
		}

		//if input is an Integer then just run your game!!: 

		$("#refactor").append("Playing Fizz-Buzz Game from 1 to " + inputValue + "<br/>");

		//calling the function
		$("#refactor").append(pickNumber(inputValue));
		
	
	//END OF THE DECIMALS TRY



/*// CODE TO MAKE SURE THE USER DOESNT INPUT a NaN.but what about decimals? 

		var inputValue = prompt("Please pick a number: ", +"");
		inputValue = parseInt(inputValue); 	

		if (isNaN(inputValue)) { 
			inputValue = prompt("Please pick a number: ", +"");
		}

		$("#refactor").append("Playing Fizz-Buzz Game from 1 to " + inputValue + "<br/>");

		//calling the function
		$("#refactor").append(pickNumber(inputValue));
		
	
	//END OF THE DECIMALS TRY*/
/*
	// CODE TO MAKE SURE THE USER DOESNT INPUT DECIMALS. 

		var inputValue;

		while((inputValue = prompt("pick a number: ", +"") % 1) != 0) {
			inputValue = prompt("pick a number that has no decimals: ", +"");
			if (inputValue % 1 === 0) {
				//we call the function directly inside the while loop
				$("#refactor").append("Playing Fizz-Buzz Game from 1 to " + inputValue + "<br/>");
				$("#refactor").append(pickNumber(inputValue));
				break;
			}
		}
	
	//END OF THE DECIMALS TRY*/

	// CODE TO MAKE SURE THE USER DOESNT INPUT DECIMALS. using If conditional

	// 	var inputValue;

	// 	if((inputValue = prompt("pick a number: ", +"") % 1) != 0) {
	// 		inputValue = prompt("pick a number that has no decimals: ", +"");
	// 		console.log(inputValue);
	// 	}
		
	// $("#refactor").append(pickNumber(inputValue));
		
				
	
	//END OF THE DECIMALS TRY


	

//Refactor Challenged try 1

	/*var inputValue = parseInt(prompt("pick a number between 1 and 100: "), 10);
	//Verification that number has a number value: 
	console.log(inputValue);
	console.log(typeof(inputValue));
	//rendering the list of numbers until the number picked by the user 
	function pickNumber(userChoice) {
		var hola;
		for (var i = 1; i <= userChoice; i++) {
			hola = "";	
			if ((i % 3 === 0) && (i % 5 !== 0)) {
			hola += " fizz " + "<br/>";
			} else if ((i % 5 === 0) && (i % 3 !== 0)) {
			hola += " buzz " + "<br/>";
			} else if((i % 5 && i % 3) === 0){
			hola += "FIZZ-BUZZ" + "<br/>";
			}
			 return hola;
		}
	};
	console.log(pickNumber(6)); // it is not loging anything! 
	*/


// this contains the correct declarations and it is displayed as initially wanted 

// for (var i = 1; i <= 100; i++) {
// 	var hola = "";
// 	if ((i % 3 === 0) && (i % 5 !== 0)) {
// 		hola += " fizz " + "<br/>";
// 	} else if ((i % 5 === 0) && (i % 3 !== 0)) {
// 		hola += " buzz " + "<br/>";
// 	} else if((i % 5 && i % 3) === 0){
// 		hola += "FIZZ-BUZZ" + "<br/>";
// 	}
// $("#secondTry").append(hola || i + " " + "<br/>");
// };


// this one is working. 
/*Previosly i was using the var n and changed it to the value of a string eg. "fizz"
but this was stoping the counting. 
	Then I added a second variable and simply displayed the counting variable n 
	or the new variable when it applies. one or the other insde the same area */

/*for (var n = 1; n <= 100; n++) {
	var nuevo = "";
	if (n % 3 === 0) {
		nuevo += ", fizz "
	} if (n % 5 === 0) {
		nuevo +=", buzz "
} if (n % 5 === 0 && n % 3 === 0){
		nuevo +=", FIZZ-BUZZ "
}
$("li").append(nuevo || n + " ").css("color", "hotpink").css("width", "30rem").css("margin", "0 auto");
};

*/

// this one, continues the counting, but it doesnt accept a change on the while statement
// also i have to find a way to add the buzz and fizz-buzz without interferance.


// for (var i = 1; i < 20; i++) {
// 	do {
// 			$("li").append(i + ", ");
// 			i++;
// 		} while (i % 3 === 0) {
// 			$("li").append(i + ", fizz, ");
// 			i++;
// 		}
// 	}



// this one shows the fizz but stops counting: 



// for(var i = 1; i < 20; i++) {
// 	if(i % 3 === 0 && i % 5 === 0) {
// 		var i = "fizz-buzz";

// 	} else {
// 		var i = i;
// 	}
// 	$("li").append(i).css("color", "hotpink");
// }
 

// this one was a little practice only: 


// alert("hello Marcus, welcome!");
// var deseo = prompt("What do you want for dinner?");

// $("p").append("tonight we ill have " + deseo + " for dinner!!").css("color", "navy").css("font-size", "2.5rem");

// var donas = confirm("Did you say that you want doughnuts??");

// if (donas === true) {
// 	alert("I think we stay with the first option: " + deseo);
// } else if (donas === false) {
// 	alert("Good Choice, now lets cook " + deseo);
// }





// var score = 100;
// if (score >= 90) {
// console.log('you got an A');
// } else if (score >= 80){
// console.log('you got a B');
// } else if (score >= 70){
// console.log('you got a C');
// } else if (score >= 60){
// console.log('you got a D');
// } else {
// console.log('you got an F');
// }




// var rain = true;
// if (rain)
//   console.log('It is raining, take an umbrella.');

// else
//   console.log('It is not raining.');