//8. Arrays //
const cars = ["Lambo", "BMW", "Volvo", "Tesla"];
const randomDataInArray = ["str", 32, null, true, {}];
console.log(randomDataInArray);
randomDataInArray[4] = "used to be an object";
console.log(randomDataInArray);

let animalsArray = ["cats", "dogs", "racoons"];
let birds = ["amazon bird", "parot", "peageon"];

const demoConcat = (arr) => {
    const input = animalsArray.toString();
    const output = animalsArray.concat(arr).toString();
    return `${input} => ${output}`;
};

console.table({
    ".length": animalsArray.length,
    ".concat()": demoConcat(birds),
    ".reverse()": animalsArray.reverse(),
    ".unshift()": animalsArray.unshift("lions"),
    ".shift()": animalsArray.shift("lions"),
    ".push()": animalsArray.push("elephants"),
    ".pop()": animalsArray.pop("elephants"),
    ".splice()": animalsArray.splice(2, 1),
});

console.log(animalsArray.toString());
