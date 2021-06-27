//Numbers//
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
