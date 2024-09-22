/*****Date object***** */

let myDate=new Date();
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.getHours());

console.log(typeof myDate);



// let myCreatedDate = new Date(2023, 0, 23) // month is indexed from 0
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //used to get the current timestamp eg when designing some quiz app

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // month is indexed from 0 hence we do +1
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

const Eg=newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
    
})
console.log(Eg)