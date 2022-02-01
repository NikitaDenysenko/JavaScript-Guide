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

//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
//Counting sheep...
/*
My Solution
function countSheeps(sheeps) {
    return sheeps.reduce((total, currentValue) => {
        if(currentValue) {
            total = total + 1
        }
        return total
    },0)
}

A better solution
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
*/

//https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
//Logical calculator
/* 
Solution was found on the internet
function logicalCalc(array, op){
  if(op == 'AND') return array.reduce((item,current) => item && current);
  if(op == 'OR') return array.reduce((item,current) => item || current);
  if(op == 'XOR') return array.reduce((item,current) => item != current);
}

Alternative solution
const ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}
function logicalCalc(array, op){
  return array.reduce(ops[op]);
}
*/

//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
//Sum Mixed Array
/*
const array = [1,4,6]
function sumMix(arr) {
    return arr.map(Number).reduce((total,value) => {
        return total += value
    },0)
}
console.log(sumMix(array))
*/

//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
//Fake Binary
/*
My Solution
const str = "45385593107843568";
function fakeBin(str) {
    let result = ''
    str.split('').map(Number).forEach((num) => {
        result += num < 5 ? "0" : "1";
    })
    return result
}

A better solution
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
*/

//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
//SpeedCode #2 - Array Madness
/*
const arrayMadness = (first, second) => {
    return countSumOfPow(first,2) > countSumOfPow(second,3);
}
const countSumOfPow = (array, pow) => {
    return array.reduce((total,value) => {
        return total + Math.pow(value, pow)
    },0)
}
*/

//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
//Removing Elements
/* 
const removeEveryOther = (arr) => arr.filter((_, index) => index % 2 === 0);
*/

//https://www.codewars.com/kata/5709bdd2f088096786000008/train/javascript
//noobCode 01: SUPERSIZE ME.... or rather, this integer!
/* 
function superSize(num) {
    return parseInt(
        num
            .toString()
            .split("")
            .sort((a, b) => b - a)
            .join("")
    );
}
*/

//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
//Add Length
/*
function addLength(str) {
    return str.split(' ').map((element) => {
        return `${element} ${element.length}`
    })
}
*/

//https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
//Check the exam
/* 
function checkExam(correctAnswers, studentAnswers) {
    const totalScore =  correctAnswers.reduce((total,_,index,array) => {
        return studentAnswers[index]
            ? (total += array[index] === studentAnswers[index] ? 4 : -1)
            : (total += 0);
    },0)
    return totalScore > 0 ? totalScore : 0
}
*/

//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
//To square(root) or not to square(root)
/*
function squareOrSquareRoot(arr) {
    return arr.map((element) => {
        const squareRootOfElement = Math.sqrt(element);
        return Number.isInteger(squareRootOfElement)
            ? squareRootOfElement
            : element ** 2;
    });
}
*/

//https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript
//Grasshopper - Array Mean
/*
const findAverage = (nums) => {
    return nums.reduce((total,value) => {
        return total + value
    },0) / nums.length
};
*/

//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
//Array plus array
/*

My Solution
const arrayPlusArray = (arr1, arr2) => {
    return sumOfArrayValues(arr1) + sumOfArrayValues(arr2)
}
const sumOfArrayValues = (array) => {
    return array.reduce((total, value) => {
        return total + value;
    }, 0);
};

Alternative Solution
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
*/

//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
//Sum of positive
/* 
function positiveSum(arr) {
    return arr.reduce((total, value) => {
        return value > 0 ? total += value : total += 0
    },0)
}
*/

//https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
//Find numbers which are divisible by given number
/* 
function divisibleBy(arr, divisor) {
    return arr.filter((value,index) => {
        return value % divisor === 0
    })
}
*/

//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
//Sort and Star
/* 
My Solution
function twoSort(arr) {
    return arr
        .sort()[0]
        .split("")
        .reduce((total, value, index) => total + (value + "***"), "")
        .slice(0, -3);
}

A Better Solution
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
*/

//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
//Well of Ideas - Easy Version
/* 
function well(arr) {
    const countGoodIdeas = arr.reduce(
        (total, value) => (value === "good" ? (total += 1) : (total += 0)),
        0
    );
    switch (true) {
        case countGoodIdeas === 0:
            return "Fail!";
        case countGoodIdeas <= 2:
            return "Publish!";
        case countGoodIdeas > 2:
            return "I smell a series!";
        default:
            break;
    }
}*/

//https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
//Find the Difference in Age between Oldest and Youngest Family Members
/*
function differenceInAges(ages) {
    const theEldest = Math.max(...ages);
    const theYoungest = Math.min(...ages);
    const differenceInAges = theEldest - theYoungest;
    return [theYoungest, theEldest, differenceInAges];
}
*/

//https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
//Merge two sorted arrays into one
/* 
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
}
*/

//https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
//UEFA EURO 2016
/* 
const uefaEuro2016 = (teams, scores) => {
    const teamOne = getTeamData(teams[0],scores[0])
    const teamTwo = getTeamData(teams[1], scores[1]);
    switch (true) {
        case teamOne.score > teamTwo.score:
            return `At match ${teamOne.name} - ${teamTwo.name}, ${teamOne.name} won!`
        case teamOne.score < teamTwo.score:
            return `At match ${teamOne.name} - ${teamTwo.name}, ${teamTwo.name} won!`
        case teamOne.score === teamTwo.score:
            return `At match ${teamOne.name} - ${teamTwo.name}, teams played draw.`;
        default:
            break;
    }
}
const getTeamData = (name, score) => {
    return {
        name, score
    }
}
*/

//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
//Remove String Spaces
/* 
const noSpace = (str) => str.split(" ").join("");
*/

//https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
//No Loops 2 - You only need one
/*
const check = (arr, elem) => arr.includes(elem);
*/

//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
//Sum Arrays
/* 
const sum = (numbers) => numbers.reduce((total, value) => total + value,0);
*/

//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
//Count of positives / sum of negatives
/*
const countPositivesSumNegatives = (input) => {
    if(input === null || input.length === 0) {
        return []
    }
    return input.reduce((result, num) => {
        num > 0 ? result[0] += 1 : result[1] += num
        return result
    }, [0,0])
}

*/