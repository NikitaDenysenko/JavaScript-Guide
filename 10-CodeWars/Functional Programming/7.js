//https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript
//Dollars and Cents
/*
const formatMoney = (amount) => `$${amount.toFixed(2)}`;
*/

//https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/javascript
//Homogenous arrays
/*
const filterHomogenous = (arrays) => {
    return arrays.filter((element) => {
        const isTheSameType = element.every((elem,_,arr) => {
            return typeof elem === typeof arr[0]
        })
        const isArrayEmpty = element.length === 0
        return isTheSameType && !isArrayEmpty
    });
}
*/