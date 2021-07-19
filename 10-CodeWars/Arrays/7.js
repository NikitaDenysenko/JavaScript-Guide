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