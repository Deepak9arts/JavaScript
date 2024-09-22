const myarr=[1,2,3,4,5,6,true,`hello`];
//in js array can have different data types

myarr.push(7); 
// push is used to add element at the end of array
//arr in js are dynamic in nature i.e. they can grow or shrink in size

/**Accessing array ele */
console.log(myarr[0]);


/*****shift and unshift */

myarr.unshift(13); // add element at the beginning of array. not recommended as it is slow and takes O(n) time
myarr.shift(); // remove element from the beginning of array. not recommended as it is slow and takes O(n) time

/****find  in array*/

console.log(myarr.includes(13)); // returns true if element is present in array else false

/***Join -> it converts array from array to string using the given separator*/
console.log(myarr.join(`-`)); // here `-` is separator

for(let i=0;i<10;i++){
    console.log()
}
/****slice -> it returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified. */
console.log("A ",myarr)

const myn1=myarr.slice(1,3)
console.log(myn1)

//console.log("A ",myarr) // original array is not modified



/****splice*** */
// it changes the contents of the array on which it is applied by extracting the mentioned portion i.e index.
// it returns the removed elements in an array

console.log("B ",myarr)
const myn2=myarr.splice(1,3) // remove elements from index 1 to 3 .ie index 1 ,2, 3 are extractedfrom myarr


console.log("C ",myarr)

console.log(myn2)

