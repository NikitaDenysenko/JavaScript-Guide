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