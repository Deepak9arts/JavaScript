const score=400
console.log(score);


const balance=new Number(1000);
console.log(balance);

//The difference in output when using Number and new Number in JavaScript is due to the distinction between primitive values and objects.
// Here, balance is an instance of the Number object.
// When you use new Number(1000), it creates a Number object that wraps the primitive value 1000.
// When you log balance to the console, it outputs the Number object: [Number: 1000].


console.log(balance.toString()) // doesn't change balance from Number to string

console.log(balance.toFixed(2))  // balance is Number object and Number have various methods like toFixed, toPrecision, toExponential etc.

console.log(balance)

const hundred=10000000;
console.log(hundred.toLocaleString()) // toLocaleString is a method of Number object which is used to convert number to string with comma separated values.



/*******Maths  Library*/

console.log(Math) // Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.

console.log(Math.abs(-4)) 

console.log(Math.round(4.2)) 

const arr=[1,2,3,4,5,6,7,8,9,10]

console.log(Math.max(...arr)) // Math.max() is a function that returns the largest of zero or more numbers.

/********Math.random */

console.log(Math.random()) // Math.random() is a function that returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range.

console.log((Math.random()*10)+1)// // here instead of number between 0 and 1, we get number between 1 and 10

// Generate a random number between  certain range

const min=10 ;
const max=20;

const val=(Math.random()*(max-min+1))+min; // +1 is added to include the max value as well and avoid producing zero
console.log(Math.floor(val));