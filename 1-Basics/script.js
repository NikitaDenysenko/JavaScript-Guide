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
//18
