//8. Arrays //

//Data and helper methods
const animalsArray = ["cats", "dogs", "racoons"];
const birds = ["amazon bird", "parot", "peageon"];
const personData = [
    { name: "Nick", age: 20, status: "student", id: 1, salary: 100 },
    { name: "Den", age: 42, status: "worker", id: 2, salary: 500 },
    { name: "Bob", age: 12, status: "student", id: 3, salary: 320 },
    { name: "Joe", age: 54, status: "retiered", id: 4, salary: 200 },
];

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

// ITERABLE METHODS //
console.log("------------------");

/* .map() */
//Returns new array, with ther result from callback for every element of array
const newPersonData = personData.map((currentValue, index, array) => {
    return {
        name: currentValue.name,
        age: currentValue.age * 2,
        index,
    };
});

/* .filter() */
//Returns new array, with all elements, that passed the check in callback function
const youngPeople = personData.filter((currentValue, index, array) => {
    return currentValue.age < 21;
});

/* .find() */
//Returns first found element, that satisfies the condition
const person = personData.find((currentValue, index, array) => {
    return currentValue.id === 3;
});

/* .reduce() */
//Executes "reducer" function to each element in array
let initialValue = 0;
const totalSalary = personData.reduce((total, currentValue, index, array) => {
    //total(a.k.a previousValue,accumulator ) - value, that was returned from the callback
    console.log({
        total,
        currentValue: currentValue.salary,
        index,
        initialValue,
    });
    return total + currentValue.salary;
}, initialValue);
console.log(personData);
console.log(totalSalary);

// console.table({
//     "mutable methods": "--------",
//     ".reverse()": demoReverse(),
//     ".unshift()": demoUnshift("lions"),
//     ".shift()": demoShift(),
//     ".push()": demoPush("hippo"),
//     ".pop()": demoPop(),
//     ".splice()": demoSplice(0, 2),
//     "immutable methods": "--------",
//     ".concat()": demoConcat(birds),
//     ".length": demoLength(),
// });
// add .sort() and other methods
