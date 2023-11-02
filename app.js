/*
console.log(null || "user");
console.log("Agnes" || "user");
*/



//chapter 2

/*
let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood)
*/


/*
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
*/


/*
let one = 1, two = 2;
console.log(one + two);
*/

/*
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
*/


/*
prompt("Enter passcode") //not used so much anymore 
*/

/*
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);
*/

/*
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)){
  console.log("Your number is the square root of " + theNumber * theNumber);
}
*/

//one-liner
//if(1 + 1 == 2) console.log("It's true");




//if-else
/*
let theNumber = Number(prompt("Pick a number "));
if (!Number.isNaN(theNumber)){
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?")
}
*/

/* chained if-else
let num = Number(prompt("Pick a number "));
if (num < 10){
  console.log("Small");
} else if (num < 100){
  console.log("Medium");
} else {
  console.log("Large");
}
*/

//loops
/*
let number = 0; 
while (number <= 12){
  console.log(number);
  number = number + 2;
}
*/


/*
let result = 1; 
let counter = 0; 
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
*/

//do loop 
/*
let yourName; 
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
*/

//indentation
/*
if (false != true){
  console.log("That makes sense.");
  if (1 < 2){
    console.log('No surprise there.')
  }
}
*/


//for loops

/*
for (let number = 0; number <= 12; number = number + 2){
  console.log(number)
}
*/

/*
let result = 1; 
for (let counter = 0; counter < 10; counter = counter + 1){
  result = result * 2;
}
console.log(result);
*/


//2. Breaking out of a loop 


/*
for (let current = 20; ; current = current + 1){
  if (current % 7 == 0 ){
    console.log(current);
    break;
  }
}
*/

//2. Updating Bindings Succinctly 

/*
for (let number = 0; number <= 12; number += 2){
  console.log(number);
}
*/

//2. Dispatching on a value with Switch 

/*
switch (prompt("What is the weather like?")){
  case "rainy": 
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
*/



//Exercises: 

/*
Write a loop that makes seven calls to console.log to output the following triangle: 
#
##
###
####
#####
######
#######
*/







