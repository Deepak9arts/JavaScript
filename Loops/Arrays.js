const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item){    //Callback function which has beeen used below
    console.log(item);
}

coding.forEach(printMe) //Only reference of the function is passed and not printMe() as it will call the function and not pass the reference of the function

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )