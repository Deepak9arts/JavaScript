//Functions in js

function sayHello(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

sayHello(); // writing the function name with () will call/execute the function
sayHello // This is just reference to function //No output


function addTwoNumbers(number1, number2)
{
    console.log(number1+number2);
}

const result=addTwoNumbers(3,5)

console.log("Result: ",result);  // This will print undefined because function is not getting any return value. It is just printing;


function loginUserMessage(username)
{
   return `${username} just logged in`
}

loginUserMessage("Deepak") //This will also wont print anything

const msg=loginUserMessage("Deepak")
console.log(msg) 

//if empty string is passed ,Then empty string is printed
console.log(loginUserMessage(" "))

//But if nothing is given in arg and ficntion is called , we will
// undefined is printed

console.log(loginUserMessage()) //undefined just logged in


/******Handling empty argument cases ******/


//Method 1 using if-else
function loginUserMessage(username)
{
    if(username===undefined)
    {
        console.log("Please enter a username")
        return 
    }
   return `${username} just logged in`
}

console.log(loginUserMessage())


//Method 2 By passing default value in function


function loginUserMessage(username="Sam")
{
    if(username===undefined)
    {
        console.log("Please enter a username")
        return 
    }
   return `${username} just logged in`
}

//

//Suppose we have to pass 2 arguments but we pass only 1 argument then the other argument will be undefined


/****How do we return multiple elements from only return statement  when func has only 1 parameter but  multiple args are passed?*/

function cartvalue(number1)
{
    return number1;
}

console.log(cartvalue(3,5,7)) //3 This will print only the first argument   



 
//But if we want to return multiple values then we can return use REST operator

function cartvalue2(...num) //this wil accept multiple args
{
    return num; // this will return an array of all the arguments
}

console.log(cartvalue2(3,5,7)) // [3,5,7] output is an array of args . This will print all the arguments



/*****Important */

function cartvalue3(va1,val2,...num) 
{
    return num; 
}


console.log(cartvalue3(3,5,7,9,10,11)) // [7,9,10,11] output is an array of args . This will print all the arguments except the first 2 arguments because first 2 args will go to va1 and val2

//we can also use the rest operator in the middle of the arguments



/****** Passing objects as arguments*/
const user={
    username:"John",
    price:100
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
   // console.log(`username is ${anyObject.name} and price is ${anyObject.price}`) //if object does not have the property name then undefined is printed 
}

handleObject(user) //username is John and price is 100

//if proprrties are not present in the object then undefined is printed

handleObject({username:"John",price:100}) //o/p : username is John and price is 100 //we can pass object directly as well


/******* passsing arrays to functions */

function returnsecondval(nums)
{
    return nums[1]
}


const arr=[1,2,3,4,5]
console.log(returnsecondval(arr)) //2
console.log(returnsecondval([1,2,3,4,5])) //2
