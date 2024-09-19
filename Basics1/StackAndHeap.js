let userOne={
    email:"user@google.com",
    upi:"user@okhdfcbank"
}

let userTwo=userOne;

console.log(userOne.email);

userTwo.email="new@email.com"

console.log(userOne.email);

//non primitive data types are always created in heap


// we can see how the value of userOne.email is changed when we change the value of userTwo.email. This is because both userOne and userTwo are pointing to the same memory location. This is called as reference type.
// first userOne is created in heap memory and then userTwo is created in heap memory. But userTwo is pointing to the same memory location as userOne. So when we change the value of userTwo, it changes the value of userOne as well. This is called as reference type.