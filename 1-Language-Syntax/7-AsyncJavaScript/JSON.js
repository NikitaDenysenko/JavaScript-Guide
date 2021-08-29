/* JSON.stringify() JSON.parse() */

//array to localStorage and back
const sizes = ["low", "mediumn", "big"];
localStorage.setItem("sizes", JSON.stringify(sizes));
const sizesFromLocalStorage = JSON.parse(localStorage.getItem("sizes"));
console.log(sizesFromLocalStorage);

//object to localStorage and back
const personData = {
    id: 1,
    name: "Joe",
    surname: "Doe",
    age: 26,
};
localStorage.setItem("personData", JSON.stringify(personData));
const personDataFetched = JSON.parse(localStorage.getItem("personData"));
console.log(personDataFetched);
