//1. Basics of outputting data//

//document.write("hellor world");
//alert("hello from alert");
//console.log("hello from console.log");

//  !!!  Make notes for console !!!

//2. Naming rules for variables://

/*
 * can contain digits, letters, underscores, $
 * must start with letter, $, or _
 * no keywords
 * connot start with number
 * case sensative (fullMoon vs fullmoon)
 * camelCase or snake_case
 */

//3. let vs const vs var//

//var - function scope
//let, const - block scope

//4. Strings//

const myName = "Joe";
const age = 54;
console.log("My name is" + " " + myName + "." + " " + "I am" + " " + age);
console.log(`My name is ${myName}. I am ${age}`);

//5. Numbers//
const num1 = 96;
const num2 = 23.79;
const num3 = "23.79";

let num4 = 12;
let num5 = 4;
let num6 = 5;

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;

console.log(addition, subtraction, multiplication, division);

console.table({
    "+=": (num4 += num5),
    "-=": (num4 -= num5),
    "/=": (num4 /= num5),
    "*=": (num4 *= num5),
    "++": ++num4,
    "--": --num4,
    "%": num4 % num6,
});

//basic math order
console.log(4 + 2 + 4 * 120);
console.log((4 + 2 + 4) * 120);

//6. Implicit tiype convertion

let number1 = "20";
let number2 = "5";
console.log(number1 - number2);
//7. Data tyeps//

//Primiteves: Number, String, Boolean,Null, undefiend, Symbol
//Objects: Object, Array, Function

console.table({
    Number: typeof 22,
    String: typeof "city name",
    Boolean: typeof false,
    Null: typeof null, // will return "object", since this is a JS bug
    Undefiend: typeof undefined,
    Symbol: typeof Symbol("Foo"),
});

//8. Arrays //
const cars = ["Lambo", "BMW", "Volvo", "Tesla"];
const randomDataInArray = ["str", 32, null, true, {}];
console.log(randomDataInArray);
randomDataInArray[4] = "used to be an object";
console.log(randomDataInArray);

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

//10. Objects//

const car = {
    name: "Lamborgini",
    speed: 400,
    isFast: true,
    colors: ["yellow", "green", "red", "blue"],
    //with function name
    startEngine1: function startTheCar() {
        console.log("Starting the engine");
    },
    //anonymous funciton
    startEngine2: function () {
        console.log("Starting the engine");
    },
    //ES6 version
    startEngine() {
        console.log("Starting the engine");
    },
};

car.speed = 440;

console.log(car);

//11. truthy/falsy values//

//12. switch//
const myAge = 20;

switch (myAge) {
    case 20:
        console.log("you are not a kid anymore");
        break;
    default:
        console.log("life is hard((");
        break;
}

switch (true) {
    case myAge > 20:
        console.log("you are adult");
        break;
    default:
        console.log("life is hard((");
        break;
}

//13. i++ vs ++i

//14. if statements
//15. for, while, do while
