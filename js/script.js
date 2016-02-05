console.log("hello Yolix");

var FizsBuzzOutput = '';
    var fizz = 0;
    var buzz = 0;
    var fizzbuzz=0;



    for ( var i=1; i < 100; i++ ) {


        if (i % 15 == 0){
            fizzbuzz+=1;                
            FizsBuzzOutput += "FizsBuzz, ";
        }

        else if ( i % 3 == 0 ){
            fizz+=1;
            FizsBuzzOutput += "Fizz, ";
        }


        else if (i % 5 == 0){
            buzz+=1;
            FizsBuzzOutput += "Buzz, "
        }       
        else {

            FizsBuzzOutput += i + ', ';
        }
        console.log(FizsBuzzOutput);
    }
 console.log('fizz count= '+ fizz);
 console.log('buzz count= '+ buzz);
 console.log('fizzbuzz count= '+ fizzbuzz);



// this one shows the fizz but stops counting: 

// for(var i = 1; i < 11; i++) {
// 	if(i % 10 === 0) {
// 		var i = "fizz";
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