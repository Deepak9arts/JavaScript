//comparison operators give us a boolean value i.e true or false

const { log } = require("console")

console.log(2>1) //true

console.log(2==1) //false

console.log("02">1) //true 
// here 2 is string and 1 is number so 2 is greater than 1
// 2 is first converted to number and then compared with 1
// Typescript says we should not compare string with number(or any other data type with another data type)
 //but in javascript it is possible



 /********** NULL Operator  */
 // == is equality check operator
 console.log(null==0) //false  //when we compare null with anything then null is first assigned a value
 //then compared. Also null is not 0 , hence it gives false output.

 console.log(null>=0) //true // null is converted to 0 and then compared with 0



 //we can see the various anamolies in the comparison of null and undefined. Hnece it is better to not compare null and undefined with any other data type



console.log(undefined==0) //false
