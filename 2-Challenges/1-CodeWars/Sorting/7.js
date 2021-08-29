//https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
//My Languages
/*
My solution
const testScoreConst = 60;
const myLanguages = (testData) => {
    const sortable = []
    for (const language in testData) {
        const testScore = testData[language];
        if(testScore >= testScoreConst) {
            sortable.push([language, testScore]);
        }
    }
    sortable.sort((a,b) => b[1] - a[1])
    return sortable.reduce((result,element,index) => {
        result[index] = element[0]
        return result
    },[])
};

A better solution
const myLanguages = results => Object.entries(results)
  .filter(([name, points]) => points >= 60)
  .sort(([name1, points1], [name2, points2]) => points2 - points1)
  .map(([name, points]) => name);
*/

//https://www.codewars.com/kata/5747fcfce2fab91f43000697/train/javascript
//Sort by Example
/*
function exampleSort(array, exampleArr) {
    const sortedArray = []
    let exampleArrCounter = 0
    for (let i = 0; i < exampleArr.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(exampleArr[i] === array[j]) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray
}
*/

//https://www.codewars.com/kata/53d6387b83db278202000802/train/javascript
//We Have Liftoff
/*
const liftoff = (instructions)=> {
    return instructions.sort((a, b) => b - a).join(" ") + " liftoff!";
}
*/

//
//
/*
My solution
const strangeMath = (amountOfNumbers, search) => {
     const lexicographicallArr = []
     for (let i = 0; i <= amountOfNumbers; i++) {
         if(i !== 0) {
             lexicographicallArr.push(i.toString());
         }
     }
     const result = lexicographicallArr.sort().map(Number)
     return result.indexOf(search) + 1
};

A better solution
const strangeMath = (amountOfNumbers, search) => {
    return Array.from({ length: amountOfNumbers + 1 }, (_, index) => {
        return index.toString();
    })
        .sort()
        .indexOf(`${search}`);
};
*/