//https://www.codewars.com/kata/56f4ff45af5b1f8cd100067d/train/javascript
//Sort - one, three, two
/*
const numberNames = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
}
const teenNumberNames = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thieteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
}
const decimalNumberNames = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
}

const getHundredNumber = (number) =>
    `${numberNames[Math.trunc(number / 100)]}} hundred`

const getNameFromNumber = (number) => {
    if (number === 0) {
        return "zero"
    }
    const numberLength = number.toString().length
    if (numberLength === 1) {
        return numberNames[number]
    }
    if (numberLength === 2) {
        if (number >= 10 && number <= 19) {
            return teenNumberNames[number]
        } else {
            return `${decimalNumberNames[Math.trunc(number / 10)]} ${
                numberNames[number % 10]
            }`
        }
    }
    if (numberLength === 3) {
        if (number % 100 <= 9) {
            return `${getHundredNumber(number)} ${numberNames[number % 100]}`
        } else if (number % 100 >= 10 && number % 100 <= 19) {
            return `${getHundredNumber(number)} ${
                teenNumberNames[number % 100]
            }`
        } else {
            return `${getHundredNumber(number)} ${
                decimalNumberNames[Math.trunc((number % 100) / 10)]
            }  ${numberNames[(number % 100) % 10]}`
        }
    }
}
const sortByName = (numbers) => {
    return numbers
        .map((num) => {
            return {
                [num]: getNameFromNumber(num),
            }
        })
        .sort((a, b) => Object.values(a)[0].localeCompare(Object.values(b)[0]))
        .map((numObject) => {
            return +Object.keys(numObject)
        })
}
*/