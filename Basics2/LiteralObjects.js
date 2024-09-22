//object literals are always deep copy


/****Declaring literal objects  */
const sy=Symbol(`key`);
const JsUser={
    name:`Hitesh`,
    age:18,
    location:`India`,
    email:`hitesh@google.com`,
    isLoggedeIn:false,
    lastLoginDays:[`Monday`,`Tuesday`,`Wednesday`],
    "full name":"Hitesh Choudhary",
    [sy]:"Sy is symbol key" // we need to use square brackets notation when the key is symbol . otherwise key will be just like string
}

//Above is eg of object literal. It is a key value pair. The key is the property and the value is the value of the property.
//The keys are stored in form of strings. Hence they can be accessed using dot notation or square brackets notation.


/*******Accesing objectgs */

//Method 1
console.log(JsUser.email);

//Method 2
//console.log(JsUser.full name); // This will give error as there is a space in the key name. Hence we need to use square brackets notation.
console.log(JsUser[`email`]);  // This is useful when the key is stored in a variable or when the key is a string with spaces.


/*******Adding new properties to object */
JsUser.upi=`deep@hdfcbank`; // This is how we add new properties to an object when is just one word
JsUser["Post Code"]=110001; // This is how we add new properties to an object when the key is a string with spaces.



/********Using symbol As a Key */

// Notice how we have used dot(.) to add new property to object. This is because the key is a string. 
//If the key is a symbol, we need to use square brackets notation.
const sym=Symbol(`key`);
JsUser[sym]=`This is a symbol key`;

console.log(JsUser[sym]); 


/**Changing values of key */
console.log(JsUser.age);
JsUser.age=20;
console.log(JsUser.age);


/*****Freezing vlaues of a key */
//Object.freeze(JsUser); // This will freeze the values of the object. Hence we cannot change the values of the object.   
JsUser.age=25;
console.log(JsUser.age); // This will still print 20 as the value of the object is frozen.

console.log(JsUser)


/*****Adding functions as values */

JsUser.greeting=function(){
console.log(`Hello Ji, ${this.name}`); 
}

//this keyword is used to acceess the values of the same object. 
//It is used to access the values of the object in which the function is defined.

//Unfreeze the object before adding anything to it
JsUser.greeting(); // This is how we call the function in the object.



