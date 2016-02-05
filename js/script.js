console.log("hello Yolix");

// this one shows the fizz but stops counting: 

for(var i = 1; i < 11; i++) {
	if(i % 10 === 0) {
		var i = "fizz";
	} else {
		var i = i;
	}
	$("li").append(i).css("color", "hotpink");
}



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