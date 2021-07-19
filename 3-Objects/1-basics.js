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

//TODO review the notes 
//TODO OOP

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

//TODO Add notes about them
/* Blue Print */
/* Factory Functions */
/* Constructor Functions */
//TODO function object???

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
const carFactoryFunction = createCar("BMW", 350);
carFactoryFunction.greet();

//constructor functions
function Car(brandName, maxSpeed) {
    this.brandName = brandName;
    this.maxSpeed = maxSpeed;
    this.greet = function () {
        console.log(
            `This my ${this.brandName}, it's max speed is ${this.maxSpeed}`
        );
    };
}
//new - creates new object, points on it,omit return. Without new - it will not refer to the object
const carConstructorFunction = new Car("Lamborgini", 380);
carConstructorFunction.greet();

//All objects in JS have access to constructor property
//that returns constructor function that craeted it

//constructor property
console.log(carConstructorFunction.constructor);

//array and fucntions ARE OBJECTS!! is JS
const obj = {};
const arr = [];
const func = function () {};
console.log({
    obj: obj.constructor,
    arr: arr.constructor,
    func: func.constructor,
});

/* Prototypal Inheritance Model */
/* 
    JS uses prototypal inheritance model. That means that 
    every constructor function/class has a prototype property
    that is shared by every instance of the constructor/class.
    So any properties and methods or prototype can be accessed 
    by every instance. Prototype property returns a objects
*/
//prototype vs __proto__ ????

function Account(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    this.deposit = function (amount) {
        this.balance += amount;
        console.log(`Hello, ${this.name}, your balance: ${this.balance}`);
    };
}

Account.prototype.bank = "VIVALDI";

const john = new Account("john", 200);
const bob = new Account("bob", 0);

//console.log({ john, bob });

/* ES6 classes */
class AccountClass {
    constructor(name, initialBalance) {
        this.name = name;
        this.initialBalance = initialBalance;
    }
    bank = "Vivaldi"; //this property will be present in all instances of this class
    deposit(amount) {
        this.initialBalance += amount;
    }
}

const joe = new AccountClass("Joe", 300);
const doe = new AccountClass();
console.log(joe.deposit(500));
console.log(joe);

/* .call() */

const mike = {
    name: "Mike",
    age: 32,
    introduceMyself(item) {
        console.log(
            `Hello,my name is ${this.name}, I'm ${this.age} and I have a ${item}`
        );
    },
};
const valera = {
    name: "Valera",
    age: 54,
};

function greet(item) {
    console.log(
        `Hello,my name is ${this.name}, I'm ${this.age} and I have a ${item}`
    );
}

greet.call(mike, "apple");
mike.introduceMyself.call(valera, "pineapple");

/* .apply() */

greet.apply(mike, ["apple"]);
mike.introduceMyself.apply(valera, ["pineapple"]);
/* .bind() */
const bindedFunction = greet.bind(valera, "tomato");
bindedFunction();

//example with buttons
const counter = {
    count: 0,
    increment() {
        console.log(this);
        this.count++;
        console.log(this.count);
    },
};
const btn = document.querySelector(".increment");

//(bad) will point "this" to the button
//btn.addEventListener("click", counter.increment);

//(some edge cases with .removeEventListener() ) will point "this" to the object
//btn.addEventListener("click", counter.increment.bind(counter));

//good
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);
