//https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript
//Can we divide it?
/* 
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
*/

//https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
//No zeros for heros
/*
My Solution:
function noBoringZeros(number) {
    const testArray =  number.toString().split('').reverse()
    let i = 0
    while(testArray[i] === '0') {
        testArray[i] = ''
        i++
    }
    return Number(testArray.reverse().join(""));
}

A Better Solution:
function noBoringZeros(n) {
    while (n % 10 == 0 && n != 0) {
        n /= 10;
    }
    return n;
}
*/

//https://www.codewars.com/kata/56fcfad9c7e1fa2472000034/train/javascript
//Evil or Odious
/*
function evil(number) {
    return number
        .toString(2)
        .split("")
        .reduce((total, element) => {
            return element === "1" ? (total += 1) : (total += 0);
        }, 0) %
        2 === 0
        ? "It's Evil!"
        : "It's Odious!";
}
*/

//https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
//Bin to Decimal
/*
const binToDec = (bin) => parseInt(bin, 2);
*/

//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
//Do I get a bonus?
/* 
const bonusTime = (salary, bonus) => (bonus ? `£${salary * 10}` : `£${salary}`);
*/