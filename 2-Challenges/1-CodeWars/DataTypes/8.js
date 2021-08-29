//https://www.codewars.com/kata/548ef5b7f33a646ea50000b2/train/javascript
//Character Frequency
/*
const charFreq = (message) => {
    return message.split("").reduce((count, element) => {
        count[element] = (count[element] || 0) + 1
        return count
    }, {});
};
*/

//https://www.codewars.com/kata/582e4c3406e37fcc770001ad/train/javascript
//ES6 string addition
/*
const joinStrings = (string1, string2) => `${string1} ${string2}`
*/

//https://www.codewars.com/kata/596fba44963025c878000039/train/javascript
//Contamination #1 -String-
/*
const contamination = (text, char) => new Array(text.length).fill(char).join('')
*/

//https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript
//The Feast of Many Beasts
/*
const feast = (beast, dish) => {
    const beastLetters = getLetters(beast)
    const dishLetters = getLetters(dish)

    return (
        beastLetters.first === dishLetters.first &&
        beastLetters.last === dishLetters.last
    ); 
}
const getLetters = (word) => {
    return {
        first: word[0],
        last: word[word.length - 1],
    };
}
*/

//https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
//Name Shuffler
/*
function nameShuffler(str) {
   return str.split(' ').reverse().join(' ')
}
*/