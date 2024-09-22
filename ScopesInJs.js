let a=10
const b=20
var c=30

{}  //every bracket creates a new scope

{
    let d=40
    const e=50
    var f=60
}

// console.log(d) //error
// console.log(e) //error
console.log(f) //60  //Although f is declared inside a block, it is accessible outside the block because it is declared using var // hence we do not var

