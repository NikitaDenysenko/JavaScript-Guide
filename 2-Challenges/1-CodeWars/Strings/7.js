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

//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
//Complementary DNA
/*
const DNAStrand = (dna) => {
    return dna.split("").reduce((result, char) => {
        switch (char) {
            case "A":
                return (result += "T")
            case "T":
                return (result += "A")
            case "G":
                return (result += "C")
            case "C":
                return (result += "G")
            default:
                return ""
        }
    }, "")
}

A better solution
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
} 
*/