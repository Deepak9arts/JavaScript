//Datatypes are defined on the basis of the values that a variable can hold and how they are stored in memory. In JavaScript, there are two types of datatypes: Primitive and Non-primitive.

const { Console } = require("console");


//  Primitive(non reference)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//symbol is used to make any value unique

console.log(id === anotherId); //false because both are unique

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)



// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//DataType of functions is function(more precisely it is object function)
console.log("Function DataType "+typeof myFunction); 
console.log("Array DataType "+typeof heros);

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//Important points:
// is js dymically typed language or statically typed language?
// JS is dynamically typed language. The type of a variable is determined at runtime. Hence we do not have to specify the data type of a variable. 
//Javascript is a loosely typed language. Hence we do not have to specify the data type of a variable.


/*objects in JS **/

//objects are stored as Key Value pairs

let obj={
    name: "hitesh",
    age: 22,
    address: {
        city: "delhi",
        country: "india"
    }
}

