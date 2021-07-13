/* Array Destructuring */
const colors = ["red", "blue", "yellow"];

const [red, blue, yellow] = colors;
console.log(red, blue, yellow);
/*
    it's the same,as:

    const red = colors[0]
    const blue = colors[1];
    const yellow = colors[2];
    console.log(red, blue, yellow);
*/

/* swap variables with destructuring */
let first = "1";
let second = "2";
[first, second] = [second, first];
console.log({ first, second });

/* Object Destructuring */

const parent = {
    name: "Jake",
    age: 52,
    status: "parrent",
    job: "driver",
};

const { name, age, job } = parent;
console.log(name, age, job);

/*
    it's the same,as:

    const name = parent.name
    const age = parent.age
    const job = parent.job
    console.log(name, age, job);
*/

// pass arguments with destruction //
const indroduction = ({name, age, job}) => {
    console.log(`My name is ${name}, I'm ${age} and my job is ${job}`)
}
indroduction(parent)