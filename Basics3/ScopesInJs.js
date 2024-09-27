

{}  //every bracket creates a new scope

{
    let d=40
    const e=50
    var f=60
}

// console.log(d) //error
// console.log(e) //error
console.log(f) //60  //Although f is declared inside a block, it is accessible outside the block because it is declared using var // hence we do not var


let a=10
const b=20
var c=30

if(true){
    let a=100
    const b=200
    var c=300
    
}
console.log(a) //10
    console.log(b) //20
    console.log(c) //300  // c value is changed to 300 because it is declared using var

 //global scope in browser console is different from global scope in vs code  
 
 





 //var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//method 1 of declaring functions
console.log(addone(5))  //no error even though function is called before declaration

function addone(num){
    return num + 1
}


// Method2
addTwo(5)  //this is error when function is declared using below syntax
const addTwo = function(num){   //This is also a way to declare functions in js
    return num + 2   
}


//These are ways of hoisting in js