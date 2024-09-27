const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//Printing all the keys of the object
for(const k in myObject){
    console.log(k);
}

//Printing all the values of the object

for(const k in myObject){
    console.log(myObject[k]);
} 



//using for in to print  arrays
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

//The output of the above code will be unexpected as it will print the index of the array and not the values of the array

//Using for in loop we cant iterate over Maps

