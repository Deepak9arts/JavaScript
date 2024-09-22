console.log("1"+"2") //12  both are strings
console.log(1+"2") //12
console.log("1"+2) //12

console.log("1"+2+3) //123

console.log(1+2+"3") //33  1+2=3 then 3+"3"=33

console.log(1+2) //3


console.log(+true) //1  beacuse only +converts true to number
console.log(+false) //0

console.log(+"") //0

// console.log(true+) // it is an error

let x=2
console.log(++(x++)) //error because x++ is evaluated first and then ++ is applied

//The code console.log(++(x++)) is an error because it attempts to use the increment operator ++ in an invalid way. Specifically, the ++ operator cannot be applied to the result of another ++ operation directly within the same expression.