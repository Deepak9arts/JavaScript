//The "new " keyword is used with the constructor functions to create an instance of the object.
//Eg: new Number(1000) creates an instance of Number object with value 1000

//For primirive data types, the new keyword is not required. Eg: new String("Hitesh") is not required. "Hitesh" is enough

const myname1 = new String("Hitesh");
console.log(myname1);

const myname2 = String("Hitesh");
console.log(myname2);

//We can see that both myname1 and myname2 are of type String. But myname1 is an instance of String object and myname2 is a primitive string.

// const sym=new Symbol("kk");
// console.log(sym);

//only String and Number in primitive data types can be created using new keyword. Rest all can be created without new keyword

