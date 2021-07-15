const car = {
    name: "BMW",
    sayThisArrow: () => {
        console.log(this);
    },
};

const person1 = {
    id: 1,
    name: "Hank",
    sayThisArrow: () => {
        console.log(this);
    },
    sayThisFunction() {
        console.log(this);
    },
    person2: {
        id: 2,
        name: "Bob",
        sayThisArrow: () => {
            car.sayThisArrow()
            console.log(this);
        },
        sayThisFunction() {
            car.sayThisArrow()
            console.log(this);
        },
    },
};

//=>
person1.person2.sayThisArrow();
//function
person1.person2.sayThisFunction();
