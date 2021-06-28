//8. Arrays //

//Basic Arrays
const cars = ["Lambo", "BMW", "Volvo", "Tesla"];
const randomDataInArray = ["str", 32, null, true, {}];
console.log(randomDataInArray);
randomDataInArray[4] = "used to be an object";
console.log(randomDataInArray);

//Data and helper methods
const animalsArray = ["cats", "dogs", "racoons"];
const birds = ["amazon bird", "parot", "peageon"];

const printResult = (output) => {
    const input = [...animalsArray].toString();
    return `${input} => ${output}`;
};

//Methods

/* .length() */
//returns the length of the array
const demoLength = () => {
    const output = animalsArray.length;
    return printResult(output);
};

/* .concat() */
//combines two or more arrays
const demoConcat = (arr) => {
    const output = [...animalsArray].concat(arr).toString();
    return printResult(output);
};

/* .reverse() */
//reverses the order of array elements
const demoReverse = () => {
    const output = [...animalsArray].reverse().toString();
    return printResult(output);
};

/* .unshift() */
//adds one or more elements at the begginig of the array, returns new length of array
const demoUnshift = (element) => {
    const copyOfOriginal = [...animalsArray];
    const returnedSizeFromUnshift = copyOfOriginal.unshift(element);
    const output = `array = ${copyOfOriginal}, returned size = ${returnedSizeFromUnshift}`;
    return printResult(output);
};

/* .shift() */
//deletes first element of array and returns it
const demoShift = (element) => {
    const copyOfOriginal = [...animalsArray];
    const returnedElementFromShift = copyOfOriginal.shift(element);
    const output = `array = ${copyOfOriginal}, returned element = ${returnedElementFromShift}`;
    return printResult(output);
};

/* .push() */
//adds one or more element to the end of array and returns new length of array
const demoPush = (element) => {
    const copyOfOriginal = [...animalsArray];
    const returnedSizeFromPush = copyOfOriginal.push(element);
    const output = `array = ${copyOfOriginal}, returned size = ${returnedSizeFromPush}`;
    return printResult(output);
};

/* .pop() */
//deletes last element from array and returns it
const demoPop = () => {
    const copyOfOriginal = [...animalsArray];
    const returnedElementFromPop = copyOfOriginal.pop();
    const output = `array = ${copyOfOriginal}, returned element = ${returnedElementFromPop}`;
    return printResult(output);
};

/* .splice() */
//adds and/or deletes elements from array, returns delete elements
const demoSplice = (startingIndex, deleteCount, optionalNewElements) => {
    const copyOfOriginal = [...animalsArray];
    const deletedItems = copyOfOriginal.splice(startingIndex, deleteCount);
    const output = `array = ${copyOfOriginal}, returned deleted elements = ${deletedItems}`;
    return printResult(output);
};

console.table({
    "mutable methods": "--------",
    ".reverse()": demoReverse(),
    ".unshift()": demoUnshift("lions"),
    ".shift()": demoShift(),
    ".push()": demoPush("hippo"),
    ".pop()": demoPop(),
    ".splice()": demoSplice(0, 2),
    "immutable methods": "--------",
    ".concat()": demoConcat(birds),
    ".length": demoLength(),
});
// add .sort() and other methods
