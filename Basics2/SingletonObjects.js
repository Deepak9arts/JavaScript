//Singleton objects are the objects that are instantiated only once. 
//In other words, a singleton object is a class that can have only one object (an instance of the class) at a time.
//if we create another object of the same class, it will return the reference of the same object.
// And any change in the object will reflect in all the references of the object.

/*****Creating Singleton Object****** */


//Method 1
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        // Initialize your singleton instance properties here
        this.data = "Singleton Data";
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }
}

// Usage
const instance1 = new Singleton();
console.log(instance1.getData()); // Output: Singleton Data

const instance2 = new Singleton();
instance2.setData("New Data");

console.log(instance1.getData()); // Output: New Data
console.log(instance1 === instance2); // Output: true // both are pointing to same memory location

//Whenever we make objects using constructor functions then singleton are cretated.

//But when we make objects using object literals then singleton are not created.



//Method 2

const tinderUser=new Object()  //This is  singleton object.  // currently it does not have any properties.
// const tinderUser={} //This is not singleton object.

/*Adding properties to singleton object */
tinderUser.name=`Hitesh`
tinderUser.isLoggedIn =18
tinderUser.id="1234"

//console.log(tinderUser);

/*Adding another object as property *****/

const tempobj={
    email:`somw@gmail`,
    fullname:{
        firstname:`Hitesh`  ,
        lastname:`Choudhary`
    }
}
console.log(tempobj.fullname.lastname);  //This is how we access nested objects 

//Extra checks if the object has a property or not

console.log(tempobj.fullnam?.lastname); //o/p will be undefined because tempobj does not have fullnam property
console.log(tempobj.fullname?.lastname); //o/p will be Choudhary because tempobj has fullname property
console.log(tempobj.hasOwnProperty(`email`)); //true //This is how we check if the object has a property or not



/******Creating uisng other objects */

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

//const obj3={obj1, obj2} //This will create a object with obj1 and obj2 as properties
//console.log(obj3);

//BUt we want to create a object with  properties of obj1 and obj2 . Not obj1 and obj2 as properties. Hence we need to use spread operator
obj3={...obj1, ...obj2}  //using spred operator to create a new object with properties of obj1 and obj2
console.log(obj3);

//We can also use Object.assign method to create a new object with properties of obj1 and obj2
obj4=Object.assign(obj1, obj2)  // Here what assign method does is it takes the first object and adds the properties of the second object to it. if third object is passed then it adds the properties of third object to the first object and so on.
console.log(obj4);
console.log(obj4==obj1);  //true //This is because object.assign method does not create a new object. It modifies the existing object
//i.e . Hence obj4 and obj1 are same.


//If we want to create a new object then we need to pass an empty object as first argument 
//Eg:
obj5=Object.assign({}, obj1, obj2,obj4)
console.log(obj5);
console.log(obj5==obj1);  //false //This is because we have passed an empty object as first argument. Hence obj5 is a new object.



/******Array of Objects**** */

//From databases we get array of objects. and we need to acces them

//Eg:
const users=[
    {
        name:`Hitesh`,
        age:18,
        location:`India`,
        
    },

    {

        name:`Hitesh`,
        age:18,
        location:`India`,
        
    },
    {

    }

]
//to access the first object we use
console.log(users[0].name); //This is just looping through the array and accessing the first object and then accessing the name property of the object.



/***Finding all the keys of an object */
console.log(Object.keys(users[0])); //This will return all the keys of the object at index 0 of the array users.
//The datatype of the output is array.

/*****Finding all the values of an object */
console.log(Object.values(users[0])); //This will return all the values of the object at index 0 of the array users.    


/**Entries */
console.log(Object.entries(users[0])); //This will return all the key value pairs of the object at index 0 of the array users.


//Sometimes when we loop through the array of objects we need to access the key value pairs of the object.
//But it may happen that the property does not exist in the object. Hence we need to check if the property exists or not.

//Eg:
console.log(users[2].hasOwnProperty('age')); //This will give error as the property does not exist in the object at index 2 of the array users.