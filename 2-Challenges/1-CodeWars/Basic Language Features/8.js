//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
//Double Char
/*
const doubleChar = (str) => {
    return str
        .split("")
        .map((element) => element + element)
        .join("");
}
*/

//https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript
//Do you speak "English"?
/*
const spEng = (sentence) => sentence.toLowerCase().includes('english')
*/

//Define a card suit
//https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
/*
My Solution
const defineSuit = (card) => {
    const cardSuit = card.slice(-1)
    switch (cardSuit) {
        case "♣":
            return "clubs";
        case "♠":
            return "spades";
        case "♦":
            return "diamonds";
        case "♥":
            return "hearts";
        default:
            return;
    }
}
Alternative Solution
function defineSuit(card) {
    const cardSuit = card.slice(-1);
    const deck = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts",
    };
    return deck[cardSuit];
}
*/

//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//Remove First and Last Character
/*
function removeChar(str) {
    return str.slice(1, -1)
}
*/

//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
//Grasshopper - Summation
/*
My Solution:
const summation = (num) => {
    let result = 0
    for(let i = 1; i <= num; i++) {
        result += i
    }
    return result
};

Alternative Solution:
const summation = n => n * (n + 1) / 2;
*/

//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
//CSV representation of array
/*
const toCsvText = arr => arr.join('\n');
*/

//https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba/train/javascript
//Type of sum
/*
function typeOfSum(a, b) {
  const sum = a + b
  return typeof sum
}
*/

//https://www.codewars.com/kata/5a651865fd56cb55760000e0
//Array Leaders (Array Series #3)
/*
const arrayLeaders = (numbers) => {
    return numbers.filter((element,index,arr) => {
        return element > arr.slice(index + 1).sum();
    })
};

Array.prototype.sum = function () {
    return this.reduce((sum, element) => {
        return sum + element;
    }, 0);
};
*/