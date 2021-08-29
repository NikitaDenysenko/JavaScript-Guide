//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
//Remove the time
/* 
function shortenToDate(longDate) {
  return longDate.split(",")[0]
}
*/

//https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript
//Is the date today
/*
const isToday = (date) => new Date().toDateString() === date.toDateString();
 */

//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript
//Days in the year
/* 
function yearDays(year) {
    const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    const totalDays = isLeapYear ? 366: 365
    return `${year} has ${totalDays} days`
}
*/

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
//Century From Year
/* 
function century(year) {
    return Math.floor((year - 1) / 100) + 1
}
*/