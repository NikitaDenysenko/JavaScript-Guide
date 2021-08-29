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

//https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
//Convert to Binary
/*
function toBinary(n){
  return Number(n.toString(2));
}
*/

//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript
//isReallyNaN
/*
const isReallyNaN = (value) => {
    return Number.isNaN(value);
};
*/

//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
//Return Negative
/*
My Solution
const makeNegative = (num) =>  num < 0 ? num : num * -1

A Better Solution
function makeNegative(num) {
  return -Math.abs(num);
}
*/

//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
//Invert values
/*
const invert = (array) => {
    return array.map(value => {
        return value * -1;
    })
}
*/

//https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
//Will there be enough space?
/*
My Solution
const enough = (cap, on, wait) => {
    const abordedPassagers = on + wait - cap;
    return abordedPassagers <= 0 ? 0 : abordedPassagers;
} 

A Better Solution
function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}
*/

//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
//Basic Mathematical Operations
/*
const basicOp = (operation, value1, value2) => {
    switch (operation) {
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/':
            return value1 / value2
        default:
            break;
    }
}
*/

//https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript
//Grasshopper - Check for factor
/*
const checkForFactor = (base, factor) => base % factor === 0
*/

//https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript
//Calculate Price Excluding VAT
/*
function excludingVatPrice(price) {
    return price === null ? -1 : Number((price / 1.15).toFixed(2))
}
*/

//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
//Total amount of points
/*
function points(games) {
    let points = 0;
    games.forEach((element) => {
        const teamOneScore = element[0]
        const teamTwoScore = element[2]
        switch (true) {
            case teamOneScore > teamTwoScore:
                return points += 3
            case teamOneScore < teamTwoScore:
                return points += 0
            case teamOneScore === teamTwoScore:
                return points += 1
            default:
                break;
        }
    });
    return points;
}
*/

//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
//Even or Odd
/*
const evenOrOdd = (number) => number % 2 === 0 ? 'Even' : 'Odd'
*/

//https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript
//Simple Comparison?
/*
function add(a, b) {
    return a == b
}
*/