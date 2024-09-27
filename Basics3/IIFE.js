//Immediately Invoked Function Expression (IIFE)

// IIFE is a function that is executed right after it is created.

//Why do we wnat to use IIFE?
//1. We want to avoid polluting the global scope variables. or getting polluted by the global scope varibales 
//2. So when we use IIFE we create local scope and we can use the variables inside the function only


//Below is normal function


// function chai(){
//     console.log(`DB Connected`);
// }

// chai(); //DB Connected



/**Below is IIFE  */
//SYNTAX: (function(){})()  WRAP THE FUNCTION IN () BRACKETS AND ADD () AT THE END

(function(){ 
    console.log(`DB Connected`);
})();


// () () the first bracket deontes where we write function definition , the second one denotes execution of the function


/***Some situtions while using IIFE */


//1)


// (function(){
//     console.log(`DB Connected`);
// }) ()

// (function(){
//     console.log(`DB Connected2`);
// })();

//error
//Above code will give error because we need to separate the IIFE with ; at the end of the first IIFE
//This is becuase IIFE doest know where the first IIFE ends and second IIFE starts


//2)

(function(){
    console.log(`DB Connected`);
}) ();

(function(){
    console.log(`DB Connected2`);
})();

//No error




//3) Using arrow function in IIFE

(function(){
    console.log(`DB Connected`);
}) ();

(()=> {
    console.log(`DB Connected2`);
})();

//4) Using parameters in IIFE

(function(){
    console.log(`DB Connected`);
}) ();

((name)=>{
    console.log(`DB Connected2 ${name}`);
})(`Batman`);


// Hence we have two types of IIFE
//1 Named IIFE
//2  Unnamed IIFE i.e uisng arrow function