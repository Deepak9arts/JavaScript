//this keyword is used to refer to the object it belongs to.

const user={
    username: 'batman',
    price:999,
    welcomeMessage: function(){
        console.log('Welcome',this.username); //it is the correct way to access the object property within the object
        //console.log(`${username}, welcome to website`); //this gives error
    }
}

console.log(user.welcomeMessage()); //Welcome batman

user.username='superman';
console.log(user.welcomeMessage()); //Welcome superman // we changed the username context of the object
// now this will refer to superman. hence this keyword refers to present context of the object


//Current context of GLOBAL
console.log(this); //{} //empty object 


/****Important */
//The current context of the global is empty object in case of nodejs 
//but in chrome console we will get window object



//Arrow function

function chai()
{
    console.log(this); //{} //empty object

    let username='batman';
    console.log(this.username); //undefined //"this" is not defined in the function
}

chai(); //when we use this inside function we get many values



//Arrow function (to write arrow function remove the function keyword and add => after the parameters)
//syntax: const variableName = () => {}

//Eg1
const coffee= () => {
 let username='batman';
 console.log(username); 
}

coffee(); //batman //arrow function does not have this keyword


//Eg2
//When we use {} in arrow function we need to use return keyword
// This is called explicit return 
const addtwo= (a,b) => {
   return a+b;
}
console.log(addtwo(2,3)); //5

//Eg3
//When we do not use {} or use () or do not use any brackets it called implicit return and 
// we do not need to use return keyword
const addnew= (a,b) => a+b;

console.log(addnew(2,3)); //5


//eg4 objects in arrow function
const obj= (n1,n2) => ({name1:n1,name2:n2});

console.log(obj('batman','sunperman')); //{ name1: 'batman' }

// ()=>()
// ()=>{}
// both are correct
