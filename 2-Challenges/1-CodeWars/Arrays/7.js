//https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript
//Change two-dimensional array
/*
function matrix(array) {
    return array.map((element,index) => {
        element[index] = element[index] < 0 ? 0 : 1;
        return element
    });
}
*/

//https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript
//Merge two arrays
/*
const mergeArrays = (first, second) => {
    const result = [];
    const iterator =
        first.length > second.length ? first.length : second.length;
    for (let i = 0; i < iterator; i++) {
        if(first[i]) {
            result.push(first[i])
        }    
        if(second[i]) {
            result.push(second[i])
        }    
    }
    return result
}
*/

//https://www.codewars.com/kata/581351c40d8f13bc450008b8/train/javascript
//Extending JavaScript Objects: Get First & Last Array Element
/*
Array.prototype.first = function() {
    return this[0]
}
Array.prototype.last = function() {
    return this[this.length - 1]
}
*/

//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
//Row Weights
/*
function rowWeights(arr){
    let teamOneWeight = 0
    let teamTwoWeight = 0
    arr.forEach((element, index) => {
        let teamIndex = index + 1
        teamIndex % 2 === 0 ?  teamTwoWeight += element : teamOneWeight += element
    })
    return [teamOneWeight, teamTwoWeight]
}
*/

//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
//Array.diff
/*
const arrayDiff = (first, second) => {
    return first.filter((num) => !second.includes(num))
}
*/