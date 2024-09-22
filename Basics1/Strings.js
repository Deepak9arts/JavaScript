// to concatenate two strings we can use the + operator

// but this is outdated
// instead we can use the ${} syntax. This is called string interpolation

// eg

const Yourname="user";
const age=30;


console.log(`Hello ${Yourname} you are ${age} years old`);

// Also with the variable name we can use the dot operator to access the properties of the string such as functions

console.log( `Hello ${Yourname.toUpperCase()}`)


let gamename=new String(`pubg`);


console.log(gamename);

let newgamename=gamename
newgamename=`msms`;

console.log(gamename);
console.log(newgamename);

/***************** */

console.log(gamename.__proto__)


const myname=`DeepakKumarRam`
console.log(myname.slice(-8,8));

// here (-8,8) means that the start from back of string and from back go till 8 characters which corresponds to letter K.
//Now second arg (i.e 8 here) alwys means that start from the first arg and go till the second arg. So here it will start from K i.e 6th index from front and go till 8 characters which corresponds to letter Ku. So the output will be Ku.


/*****TRIM Function */
// it removes startting space and ending space from the string

const myname1=`   DeepakKumarRam   `
console.log(myname1);
console.log(myname1.trim());


/*****REPLACE Function */

const url="https://www.google.com/hitesh%20choudhary";
console.log(url.replace("%20","-"));

console.log(url.includes("hitesh"));

/******Split function */

const names="Deepak,Kumar,Ram";
const arr=names.split(",");
console.log(arr);



