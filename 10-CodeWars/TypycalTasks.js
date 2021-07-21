//TODO {}
//Count 
// const countLanguages = (list) => {
//     return list.reduce((counter, element) => {
//         const language = element.language;
//         counter[language] = (counter[language] || 0) + 1;
//         return counter;
//     }, {});
// };

//TODO 
//object kay and value to array TYPYCAl

// const testScoreConst = 60;
// const myLanguages = (testData) => {
//     const sortable = [];
//     for (const language in testData) {
//         const testScore = testData[language];
//         if (testScore >= testScoreConst) {
//             sortable.push([language, testScore]);
//         }
//     }
//     sortable.sort((a, b) => b[1] - a[1]);
//     return sortable.reduce((result, element, index) => {
//         result[index] = element[0];
//         return result;
//     }, []);
// };

//TODO remake with forEach, map or other methods
// function exampleSort(array, exampleArr) {
//     const sortedArray = [];
//     let exampleArrCounter = 0;
//     for (let i = 0; i < exampleArr.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (exampleArr[i] === array[j]) {
//                 sortedArray.push(array[j]);
//             }
//         }
//     }
//     return sortedArray;
// }

//TODO make dynamic array
// const strangeMath = (amountOfNumbers, search) => {
//     return Array.from({ length: amountOfNumbers + 1 }, (_, index) => {
//         return index.toString();
//     })
//         .sort()
//         .indexOf(`${search}`);
// };