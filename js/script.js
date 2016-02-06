console.log("hello Yolix");

for (var i = 1; i < 20; i++) {
	do {
		$("li").append(i + ", ");
		i++;
	} while (i % 3 === 0) {
		$("li").append(i + " fizz, ");
		i++;
	}

	}	


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



// this one shows the fizz but stops counting: 



// for(var i = 1; i < 20; i++) {
// 	if(i % 3 === 0 && i % 5 === 0) {
// 		var i = "fizz-buzz";

// 	} else {
// 		var i = i;
// 	}
// 	$("li").append(i).css("color", "hotpink");
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