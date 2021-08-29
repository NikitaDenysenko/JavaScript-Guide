//https://www.codewars.com/kata/59e8afdd0863c7bcb300013a/train/javascript
//Give me the k first digits. Odd digits.
/*
const findOddDigits = (number, amount) => {
    if (amount > number.toString().length || amount === 0) {
        return 0;
    }
    const oddDigits = 
        number
            .toString()
            .split("")
            .map(Number)
            .reduce((result, num) => {
                return num % 2 !== 0 && result.length < amount
                    ? result.concat(num)
                    : result;
            }, "")
    ;
    return (!oddDigits || amount > oddDigits.length) ? 0 : parseInt(oddDigits);
}; 
*/
