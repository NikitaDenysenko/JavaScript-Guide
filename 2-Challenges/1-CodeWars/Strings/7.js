//https://www.codewars.com/kata/56747fd5cb988479af000028/javascript
//Get the Middle Character
/*
const getMiddle = (str) => {
    const isEvenLength = str.length % 2 === 0
    const middle = Math.floor(str.length / 2);
    return isEvenLength ? `${str[middle - 1]}${str[middle]}` : `${str[middle]}`;
}
*/

//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
//Disemvowel Trolls
/*
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

const disemvowel = (str) => {
    return str
        .split("")
        .filter((char) => {
            if (vowels.includes(char)) {
                return ""
            }
            return char
        })
        .join("")
}
*/