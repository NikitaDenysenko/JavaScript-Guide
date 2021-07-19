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

//https://www.codewars.com/kata/535d118ccdbf501816001101/train/javascript
//[JS] Parse integers in array
/*
const parseNumbers = (intStrs) => {
    return intStrs.map(element => parseInt(element))
};
*/

//https://www.codewars.com/kata/563f879ecbb8fcab31000041/train/javascript
//First-Class Function Factory
/*
function factory(x){
    return array => array.map( a => a*x );
}
*/

//https://www.codewars.com/kata/532b4057484b0e58e8000766/train/javascript
//Use reduce() to calculate the sum of the values in an array
/*
const sum = (array) => {
  return array.reduce((sum,element) => {
    return sum + element
  },0)
}
*/

//https://www.codewars.com/kata/53951fff369894e4f10007a9/train/javascript
//Use map() to double the values in an array
/*
function double(array) {
    return array.map((element) => {
        return element * 2
    })
}
*/

//https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript
//esreveR (custom reverse method)
/*
const reverse = (array) => {
    const result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }
    return result
};
*/

//https://www.codewars.com/kata/52195c9bb576caf14200007f/train/javascript
//Adding useful functional functionality to JavaScript arrays
/*
Array.range = function (start, count) {
    const result = []
    for (let i = 0; i < count; i++) {
        result.push(start);
        start++;
    }
    return result
};

Array.prototype.sum = function (...params) {
    return this.reduce((sum, element) => {
        return sum + element
    },0)
};
*/