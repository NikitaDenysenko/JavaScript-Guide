//https://www.codewars.com/kata/5e4d8a53b499e20016b018a0/train/javascript
//Exponential-Golomb Decoder
/*
const getDecodedNumber = (sequence, from, to) => 
    parseInt(sequence.substring(from, to), 2) - 1


const decoder = (sequence) => {
    let zerosCounter = 0
    const results = []
    for (let i = 0; i < sequence.length; i++) {
        const number = sequence[i]
        if (number === "0") {
            zerosCounter++
        } else {
            results.push(getDecodedNumber(sequence, i, zerosCounter + i + 1))
            i += zerosCounter
            zerosCounter = 0
        }
    }
    return results
}
*/

//https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
//Greed is Good
/*
const diceDataOf = {
    1: {
        amount: 0,
        pointsForSingle: 100,
        pointsForTriplet: 1000,
    },
    2: {
        amount: 0,
        pointsForTriplet: 200,
    },
    3: {
        amount: 0,
        pointsForTriplet: 300,
    },
    4: {
        amount: 0,
        pointsForTriplet: 400,
    },
    5: {
        amount: 0,
        pointsForSingle: 50,
        pointsForTriplet: 500,
    },
    6: {
        amount: 0,
        pointsForTriplet: 600,
    },
}
const score = (dice) => {
    return dice.reduce((result, element) => {
        const diceEdgeData = diceDataOf[element]
        diceEdgeData.amount += 1
        if (diceEdgeData.amount === 1 && diceEdgeData.pointsForSingle) {
            result += diceEdgeData.pointsForSingle
        }
        if (diceEdgeData.amount === 2 && diceEdgeData.pointsForSingle) {
            result += diceEdgeData.pointsForSingle * 2
        }
        if (diceEdgeData.amount === 3) {
            result += diceEdgeData.pointsForTriplet
        }
        return result
    }, 0)
}
*/

//https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
//RGB To Hex Conversion
/*
const rgb = (r, g, b) => {
    return Array(r, g, b)
        .reduce((result, num) => {
            if (num <= 0) {
                return result += "00"
            }
            if (num >= 255) {
                return result += "FF"
            }
            const hexNum = num.toString(16)
            if (hexNum.length === 1) {
                return result += "0" + hexNum
            }
            return result += hexNum
        }, "")
        .toUpperCase()
}
*/

//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
//Pete, the baker
/*
const getIngredients = (recipe, available) => {
    return Object.entries(recipe).reduce((ingredients, element) => {
        ingredients[element[0]] = Math.trunc(
            available[element[0]] / recipe[element[0]]
        )
        return ingredients
    }, {})
}

const cakes = (recipe, available) => {
    return Math.min(...Object.values(getIngredients(recipe, available))) || 0
}
*/

//https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
//Sum of pairs
/*
const sumPairs = (numbers, sum) => {
    const seen = {}
    for (var i = 0; i < numbers.length; ++i) {
      if (seen[sum - numbers[i]]) {
        return [sum - numbers[i], numbers[i]];
      }
      seen[numbers[i]] = true
    }
}
*/

//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
//Sum of Digits / Digital Root
/*
const getSumOfNums = (num) => {
    return num
        .toString()
        .split("")
        .map((elem) => Number(elem))
        .reduce((counter, element) => {
            return counter + element
        }, 0)
}

const digitalRoot = (num) => {
    if(num === 0) {
        return 0
    }
    let result = 0
    while (!result) {
        num = getSumOfNums(num)
        result = num / 10 >= 1 ? 0 : num
    }
    return result
}

A better solution:
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
*/