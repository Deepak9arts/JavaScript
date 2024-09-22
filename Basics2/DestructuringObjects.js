//Desturcturing Objects in JavaScript ES6 
//Destructuring is a way to extract values from data stored in objects and arrays.

// It is done for arrays and objects.

//For example, if we get a object in react we destructure it to get the values of the object.

// Here we will see how to destructure objects in JavaScript.


const course={
    courseName:"React",
    price:"999",
    courseInstructor:"John Doe"
}

//Suppose we have to print the courseName 10 times. Then we using course.courseName 10 times is not a good practice.

//We can destructure the object and use the courseName directly.



/*******Destructuring the object syntax is as follows: ****/
//Syntax
//const {the property we want to destructure}=course

const{courseInstructor} = course;
console.log(courseInstructor); //John Doe

// we can even rename the property while destructuring
const{courseInstructor:instructor} = course;
console.log(instructor); //John Doe

//We can also destructure multiple properties at once
const{courseName,price} = course;
console.log(courseName); //React
console.log(price); //999


//Eg From reactt  where we get the props object
/**  const Course = (props) => {

}
    **/

const navbar=({company})=>  //  instead of writing  (props.company) we can directly write ({company})
{
    console.log(company);
} 

navbar(company="Google");
 

