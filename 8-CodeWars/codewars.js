//Array
//Convert number to reversed array of digits (8)
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

/*
const num = 35231;
function digitize(num) {
    return num.toString().split("").reverse().map(Number);
}
console.log(digitize(num)); 
*/

//Array
//Count by X (8)
//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

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

//Array
//Get the mean of an array 8
//https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
/*
const getAverage = (marks) => {
    return Math.floor(
        marks.reduce((total, currentValue) => total + currentValue, 0) / marks.length
    );
} */

//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
const array = [1, 2, 3, 4, 7, 8];
const firstNonConsecutive = (arr) => {
    const arrayFiltered = [...new Set(arr)];
    let isConsecutive = true;
    let nonConsecutive;
    for (let i = 0; i < arrayFiltered.length - 1; i++) {
        isConsecutive = arrayFiltered[i] + 1 === arrayFiltered[i + 1];
        if (!isConsecutive) {
            nonConsecutive = arrayFiltered[i + 1];
        }
    }
    return isConsecutive ? null : nonConsecutive;
};
console.log(firstNonConsecutive(array));
