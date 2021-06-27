//Basics of outputting data//

//document.write("hellor world");
//alert("hello from alert");
//console.log("hello from console.log");

console.log(console);

//test data
const testObject = {
    name: "Denchik",
    age: 54,
    isStudent: true,
};

const testArray = [2, 3, 5, "test", false, {}];

const persons = [
    { name: "Joe", lastName: "Doe", age: 23 },
    { name: "Mike", lastName: "Dice", age: 39 },
    { name: "Tyler", lastName: "Smith", age: 54 },
];

/* .log() */
//outputs general data
console.log(testObject);

//you can output data as key-value object
console.log({ testArray, testObject });

//to add CSS styles to your .log(), use %c at the begging of the log, and then pass CSS styles
console.log(
    "%c JavaScript rules the Web!",
    "color: yellow; font-weight: bold;background-color:black"
);

/* .group() */
//creates new log group, moves logs, on the bottom of the console to the right
console.group(testArray);

/* .table() */
//outputs data as table
console.table(persons);

//show only particular properties
console.table(persons, ["age", "name"]);

/* .error() */
//outputs your custom error
console.error("This is my custom error message");

/* .warn() */
//craete custom warning message
console.warn("This is my custom warning message");

/* .assert() */
//logs data, if condition is false
console.assert(true, "shit happpend");

/* .count() */
//logs how many times "console.count" was called with the same value (label)
console.groupCollapsed("counts"); //same as .group() but logs it closed
console.count("test");
console.count("test");
console.count("start");
console.count(["test", "end", "start"]);
console.count(["test", "end", "start"]);

/* .countReset() */
//resets .count() with the same label
console.countReset("test");
console.count("test");
console.groupEnd(); // exits the current group

/* .trace() */
//method,which tells you all of the function calls that happened in your app to get you, where .trace() is placed
function fun1() {
    console.trace();
}
fun1();
