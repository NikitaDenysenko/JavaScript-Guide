/* basics */
const healthStatus = "health-status";
//dynamicly access object variables
let valueFromPersonObject = "id";
valueFromPersonObject = "name";
const person = {
    id: 32,
    name: "Joe",
    surname: "Bronson",
    brothers: ["Mike", "Walter"],
    greet: function (name) {
        console.log(`My name is ${name}`);
    },
    sayHello(name) {
        console.log(`My name is ${name}`);
    },
    car: {
        brand: "BMW",
        maxSpeed: 350,
    },
    "university degree": "masters", //to acces, use ['variable-name'],
    "health-status": "exelent",
};
//console.log(person["university degree"]);
//console.log(person[healthStatus]); //passing the string,to access variable in object
//console.log(person[valueFromPersonObject]);

/* this */
//this - points to the left of the dot

//in regular functions (not arrow) "this" is
//determined by HOW a function is invoked (left of .)

//if we invoke the function without anything on the left side of the dot -
// - it will refer to global window object

function showThis() {
    console.log(this);
}

const cat = {
    name: "Maximus",
    age: 12,
    greet() {
        console.log(`This is ${this.name}, he is ${this.age}`);
    },
    showThis,
};
const dog = {
    name: "Hatiko",
    age: 9,
    greet() {
        console.log(`This is ${this.name}, he is ${this.age}`);
    },
    showThis,
};
// cat.greet();
// dog.greet();
// cat.showThis();
// dog.showThis();
// showThis();

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
btn1.addEventListener("click", showThis);
btn2.addEventListener("click", showThis);
btn2.addEventListener("click", function () {
    showThis();
});

/* Blue Print */
/* Factory Functions */
/* Constructor Functions */

//factory function
function createCar(brandName, maxSpeed) {
    return {
        brandName,
        maxSpeed,
        greet() {
            console.log(
                `This my ${this.brandName}, it's max speed is ${this.maxSpeed}`
            );
        },
    };
}

const myCar = createCar("BMW", 350);
myCar.greet();
