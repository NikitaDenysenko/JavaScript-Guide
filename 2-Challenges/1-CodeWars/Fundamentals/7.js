//https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
//Form The Minimum
/*
const minValue = (values) => Number([...new Set(values)].sort().join(""))
*/

//https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
//Money, Money, Money
/*
const getIncome = (principal,interest,tax) => principal + (principal * interest) - (tax * interest * principal)
const calculateYears = (principal, interest, tax, desired) => {
    let year = 1
    let income =  getIncome(principal,interest,tax)
    if(principal === desired) {
        return 0
    }
    while(income < desired) {
        principal = income
        income = getIncome(principal,interest,tax)
        year++
    }
    return year
}
*/

//Printer Errors
//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
/*
const errors = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const getErrorCounter = (str) =>
    str
        .split("")
        .reduce(
            (counter, value) => (errors.includes(value) ? ++counter : counter),
            0
        )
const printerError = (str) => `${getErrorCounter(str)}/${str.length}`

*/

//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
//Square Every Digit
/*
const squareDigits = (num) => {
    return Number(
        num
            .toString()
            .split("")
            .reduce((result, num) => {
                return result + Math.pow(Number(num), 2).toString()
            }, "")
    )
}
*/

//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
//You're a square!
/*
const isSquare = (num) => Number.isInteger(Math.sqrt(num))
*/

//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
//Growth of a Population
/*
const nbYear = (p0, percent, aug, p) => {
    let countYear = 0
    while(p0 < p) {
        p0 += (p0 * percent / 100) + aug
        countYear++
    }
    return countYear
}
*/

//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
//Mumbling
/*
const transformString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const getMultipleChars = (char, counter) => {
    let result = ""
    for (let i = 0; i < counter; i++) {
        result = `${result}${char}`
    }
    return transformString(result)
}

const accum = (str) => {
    return str
        .split("")
        .map((char, index) => getMultipleChars(char, index + 1))
        .join("-")
}
*/