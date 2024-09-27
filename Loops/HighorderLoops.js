// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//in map duplicate keys are not stored even if we try to store it 
map.set('IN', "India")


 //console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);  // Prints the key and value of the map
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


//objects are not iterable

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }    

