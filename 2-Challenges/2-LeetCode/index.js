//https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/submissions/
//1493. Longest Subarray of 1's After Deleting One Element
/*
const nums = [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1];
const longestSubarray = (nums) => {
    if (allEqualTo(nums, 0)) {
        return 0;
    }
    if (allEqualTo(nums, 1)) {
        nums.pop();
        return nums.length;
    }

    const zerosIndexPositions = nums.reduce((counter, element, index) => {
        if (element === 0) {
            counter.push(index);
        }
        return counter;
    }, []);

    // const subarrayLengths = [];
    // for (let i = 0; i < zerosIndexPositions.length; i++) {
    //     let counter = 0;
    //     const numsCopy = [...nums].filter((_, index) => {
    //         return index !== zerosIndexPositions[i];
    //     });
    //     for (let j = 0; j < numsCopy.length; j++) {
    //         if (numsCopy[j] === 0) {
    //             subarrayLengths.push(counter);
    //             counter = 0;
    //         } else {
    //             counter = counter + 1;
    //         }
    //         if (j === numsCopy.length - 1) {
    //             subarrayLengths.push(counter);
    //         }
    //     }
    // }
    const subarrayLengths = zerosIndexPositions.map((element, index, array) => {
        let counter = 0;
        const numsCopy = [...nums].filter((_, i) => {
            return i !== index;
        });
    });
    //return Math.max(...subarrayLengths);
};

const allEqualTo = (arr, num) => {
    return arr.every((v) => v === num);
};

console.log(longestSubarray(nums));

*/

//https://leetcode.com/problems/two-sum/
//1. Two Sum
/*
const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
}
*/

//https://leetcode.com/problems/reverse-integer/
//7. Reverse Integer
/*
const downLimit = Math.pow(-2, 31)
const upLimit = Math.pow(2, 31) - 1

const getResultString = (number) => {
    let result = ""
    const reversedArray = getReverseArrayFromNumber(number)
    for (let i = 0; i < reversedArray.length; i++) {
        result = result + reversedArray[i]
        if (+result < downLimit || +result > upLimit) {
            return 0
        }
    }
    return result
}

const getReverseArrayFromNumber = (number) => {
    return Array.from(number.toString()).reverse()
}

const reverse = (number) => {
    return number < 0
        ? +`-${getResultString(Math.abs(number))}`
        : +getResultString(number)
}
*/

//https://leetcode.com/problems/powx-n/
//50. Pow(x, n)
/*
const myPow = (x, n) => {
    return Math.pow(x,n)
};
*/