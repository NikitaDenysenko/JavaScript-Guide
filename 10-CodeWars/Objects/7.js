//https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript
//Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
/*
My Solution
const isSameLanguage = (list) => {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i].language !== list[i + 1].language) {
            return false;
        }
    }
    return true;
};
A better solution 
function isSameLanguage(list) {
  return list.every(e => e.language === list[0].language);
}
*/

//https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript
//Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
/*
const countLanguages = (list) => {
    return list.reduce((counter, element) => {
        const language = element.language
        counter[language] = (counter[language] || 0 ) + 1 
        return counter
    },{})
}
*/

//https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript
//Coding Meetup #11 - Higher-Order Functions Series - Find the average age
/*
const getAverageAge = (list) => {
    const totalAge =  list.reduce((ageCounter, element) => {
        return ageCounter + element.age
    }, 0) 
    const totalDevelopers = list.length
    return Math.round(totalAge / totalDevelopers);
}
*/

//https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
//Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
/*
const countDevelopers = (list) => {
    return list.reduce((totalJSDevs, element) => {
        return (
            element.language === "JavaScript" && element.continent === "Europe"
        ) ? totalJSDevs += 1 : totalJSDevs += 0;
    },0)
}
*/

//https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript
//Coding Meetup #14 - Higher-Order Functions Series - Order the food
/*
const orderFood = (list) => {
    return list.reduce((count, element) => {
        const meal = element.meal;
        count[element.meal] = (count[element.meal] || 0) + 1
        return count
    },{})
}
*/

//https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
//Coding Meetup #2 - Higher-Order Functions Series - Greet developers
/*
function greetDevelopers(list) {
    return list.map((element) => {
        return {
            ...element,
            greeting: `Hi ${element.firstName}, what do you like the most about ${element.language}?`,
        };
    })
}
*/