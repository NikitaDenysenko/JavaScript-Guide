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