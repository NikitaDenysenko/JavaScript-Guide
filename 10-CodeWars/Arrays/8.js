//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
//Convert number to reversed array of digits
/*
const num = 35231;
function digitize(num) {
    return num.toString().split("").reverse().map(Number);
}
console.log(digitize(num)); 
*/

//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
//Count by X
/* 
const countBy = (x, n) => {
    let counter = 1;
    const result = [];
    while(counter <= n) {
        result.push(x * counter)
        counter++
    }  
    return result
}
*/

//https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
//Get the mean of an array
/*
const getAverage = (marks) => {
    return Math.floor(
        marks.reduce((total, currentValue) => total + currentValue, 0) / marks.length
    );
} */

//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
//Find the first non-consecutive number
// const arr = [1, 2, 3, 4, 5, 7];
/*
const firstNonConsecutive = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (!(arr[i] + 1 === arr[i + 1])) {
            return arr[i + 1];
        }
    }
    return null;
};
*/

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
//Abbreviate a Two Word Name
/*
const name = "greg smith";
const abbrevName = (name) => {
    return name
        .split(" ")
        .map((value) => value.charAt(0).toUpperCase())
        .join(".");
};
console.log(abbrevName(name));
*/

//https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript
//pick a set of first elements
/* 
My solution:
const first = (arr, count = 1) => {
    return arr.length === 0 ? [] : arr.slice(0, count);
};

A better solution:
const first = (arr, count = 1) => {
    return arr.slice(0, count);
};
*/

//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
//Filter out the geese
/*
const birds = [
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
];
function gooseFilter(birds) {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    return birds.filter(bird => !geese.includes(bird))
}
console.log(gooseFilter(birds));
*/
