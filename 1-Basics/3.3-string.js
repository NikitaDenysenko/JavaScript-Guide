//Strings//
let testString = "Hello, It's me, Mario!";
let stringWithSapaces = "    the spaced text    ";
let brokenString = "   Joe Doe the kInG oF Custle  ";
let testName = "Carl";

const printResult = (input, output) => {
    return `${input} => ${output}`;
};

//Methods and properties

/* .length */
//returns the size of the string
const demoLength = (str) => {
    return printResult(str, str.length);
};

/* .toLowerCase() */
//returns stirng value with lower case characters
const demoToLowerCase = (str) => {
    return printResult(str, str.toLowerCase());
};

/* .toUpperCase() */
//returns stirng value with upper case characters
const demoToUpperCase = (str) => {
    return printResult(str, str.toUpperCase());
};

/* .charAt() */
//returns char at specific index
const demoCharAt = (str, index) => {
    return printResult(index, str.charAt(index));
};

/* .indexOf() */
//returns index of first-entered string value
const demoIndexOf = (str, searchValue, fromIndex) => {
    //fromIndex is optional
    return printResult(searchValue, str.indexOf(searchValue, fromIndex));
};

/* .trim() */
//deletes spaces from start and end of the string
const demoTrim = (str) => {
    return printResult(str, str.trim());
};

/* .startsWith() */
//checks, if string starts with specific char,returns boolean
const demoStartsWith = (str, char) => {
    return printResult(char, str.startsWith(char));
};

/* .endsWith() */
//checks, if string ends with specific char,returns boolean
const demoEndsWith = (str, char) => {
    return printResult(char, str.endsWith(char));
};

/* .includes() */
//Checks, if string includes specific substring
const demoIncludes = (str, substr) => {
    return printResult(substr, str.includes(str));
};

/* .slice() */
//extracts a portion of a string and returns a new string.
const demoSlice = (str, beginIndex, endIndex) => {
    return printResult(str, str.slice(beginIndex, endIndex));
};

/* .lastIndexOf() */
//return index, where searchValue is last present in string
const demoLastIndexOf = (str, searchValue) => {
    return printResult(searchValue, str.lastIndexOf(searchValue));
};

/*  .repeat() */
//returns new string with 'count' amount of repeats
const demoRepeat = (str, count) => {
    return printResult(str, str.repeat(count));
};

//REGEX .search() .replace() .match() .matchAll()

// .split() .substring()

/* .split() */
//creates array from string, with specific separator
const demoSplit = (str, separator) => {
    return printResult(str, str.split(separator));
};

/* .substring() */
//returns a substring from string
const demoSubstring = (str, from, to) => {
    return printResult(str, str.substring(from, to));
};

console.table({
    ".length": demoLength(testString),
    ".toLowerCase()": demoToLowerCase(testString),
    ".toUpperCase()": demoToUpperCase(testString),
    ".startsWith()": demoStartsWith(testString, "Hello"),
    ".endsWith()": demoEndsWith(testString, "io"),
    ".indexOf()": demoIndexOf(testString, "llo", 1),
    ".lastIndexOf()": demoLastIndexOf(testString, "o"),
    ".charAt()": demoCharAt(testString, 1),
    ".trim()": demoTrim(stringWithSapaces),
    ".includes()": demoIncludes(testString, "Mario"),
    ".slice()": demoSlice(testString, 0, 14),
    ".substring()": demoSubstring(testString, 0, 14),
    ".split()": demoSplit(testName, ""),
    ".repeat()": demoRepeat(testName, 3),
});

//chaining methods
console.log(brokenString.trim().toLowerCase().startsWith("joe"));
