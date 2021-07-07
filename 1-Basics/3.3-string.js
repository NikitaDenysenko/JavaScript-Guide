//Strings//

const myName = "Joe";
const age = 54;
console.log("My name is" + " " + myName + "." + " " + "I am" + " " + age);
//template literals
console.log(`My name is ${myName}. I am ${age}`);

let testString = "Hello, It's me, Mario!";
let stringWithSapaces = "    the spaced text    ";
let brokenString = "   Joe Doe the kInG oF Custle  ";

const printResult = (input, output) => {
    return `${input} => ${output}`;
};

//Methods and properties

/* .length */
//returns the size of the string
const demoLength = () => {
    return testString.length;
};
//TODO .lastIndexOf() .localeCompare() .match() .matchAll() .repeat() .replace()
// .search() .split() .substr() .substring()
console.log(testString[1], testString.charAt(1));
console.table({
    ".length": demoLength,
    ".toLowerCase()": testString.toLowerCase(),
    ".toUpperCase()": testString.toUpperCase(),
    ".charAt()": testString.charAt(1),
    ".indexOf()": testString.indexOf("o"),
    ".trim()": stringWithSapaces.trim(),
    ".startsWith()": testString.startsWith("Hello"),
    ".includes()": testString.includes("Mario"),
    ".slice()": testString.slice(0, 14), //does not inclueds last index
    ".endsWith()": testString.endsWith("io!"),
});

//chaining methods
console.log(brokenString.trim().toLowerCase().startsWith("joe"));
