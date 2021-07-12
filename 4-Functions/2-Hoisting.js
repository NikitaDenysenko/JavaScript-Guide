//Hoisting - moves declaration to the top of the document
//function and var declarations are hoisted
//safer to access only after initialized 
//TODO add some more info about hoisting


console.log(varNumber) //undefiend
console.log(letNumber) //error
console.log(constNumber) //error

const constNumber = 1
let letNumber = 1
var varNumber = 1

const constFunc = () => {
    console.log("hello from constFunc");
}

var varFunc = () => {
    console.log("hello from varFunc");
}