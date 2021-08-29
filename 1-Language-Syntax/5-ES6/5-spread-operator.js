//spread operator - for arguments
/* Spread operator for array */

//copy and merge arrays
const sizes = ["small", "meduim", "big"];
const colors = ["red", "green", "yellow"];
const combinedArrays = [...sizes, ...colors];

//slit string
const string = "this is a test";
const str = [...string];
console.log(str);

/* Spread operator for object */

const cat = {
    name: "Max",
    age: 11,
};
const newCat = { ...cat, color: 'grey' };
console.log(newCat);

/* S.O for Function Arguments */
const dog = ["Mike", "brown"];
const sayHelloToDog = (name, color) => {
    console.log(`Hi ${name}, you fur is ${color} color`)
}
sayHelloToDog(...dog)
