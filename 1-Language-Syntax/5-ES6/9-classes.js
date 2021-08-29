//TODO getters, setters, static,super, super.method()

/* before */
/*
    // 1. create function constructor
    function User(name) {
        this.name = name;
    }

    // 2. add method to prototype
    User.prototype.sayHi = function() {
        alert(this.name);
    };

    // usage:
    let user = new User("Иван");
    user.sayHi();
*/

/* after */
/*
    class User {
        constructor(name) {
            this.name = name;
        }

        sayHi() {
            alert(this.name);
        }
    }

    // usage:
    let user = new User("Иван");
    user.sayHi();
*/

class Car {
    constructor(options) {
        this.brand = options.brand;
        this.name = options.name;
        this.maxSpeed = options.maxSpeed;
    }
}

const car = new Car({ brand: "Tesla", name: "Model X", maxSpeed: 400 });
console.log(car)
