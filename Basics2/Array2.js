const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


/*Push */
//it pushes the element at the end of the array . Here a an array was pushed at the end of another array
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);




/******Concate   */

//concate doest push the array at the end of another array. It takes elements of both arrays and creates a new array.

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//The concate operation is not done in place. It creates a new array and returns it.



/*****Spread operator */
// '..' spread operator  makes a single array out of all given arrays
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);




const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //false   //isArray is a static method of Array object which is used to check if the given object is an array or not. 
console.log(Array.from("Hitesh")) //from is a static method of Array object which is used to create an array from an array-like or iterable object.
console.log(Array.from({name: "hitesh"})) // interesting  . The input to .from fuunction is key-value pair Hence it gets confused and reuturns empty string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

//of is a static method of Array object which is used to create an array from a variable number of arguments, regardless of number or type of the arguments.