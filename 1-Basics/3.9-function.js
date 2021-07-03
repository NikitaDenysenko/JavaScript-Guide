//9. Functions //
//function declaration/deffinition
function doRepeatedCode() {
    console.log("I am working on repeated code");
}
//functino invokation
doRepeatedCode();

//function expression
const add = function addNumbers(num1, num2) {
    return num1 + num2;
};

//function expression(anonymous function)
const subtract = function (num1, num2) {
    return num1 - num2;
};

function sayHello(perosnName) {
    //here, "perosnName" - is parameter
    console.log(`Hello ${perosnName}`);
}
//here, "perosnName" - is argument
sayHello("Bob");
sayHello("Anna");
sayHello("Sussy");

//return

function inchToCm(width, height) {
    const multiplier = 2.56;
    return [width * multiplier, height * multiplier];
}

const data = inchToCm(1, 2);
console.log(data);

//IIFE (Immediately Invoked Function Expression)
(function testSelf() {
    console.log("envoked myself");
})();
