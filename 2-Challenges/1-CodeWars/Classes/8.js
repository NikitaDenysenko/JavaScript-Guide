// https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript
//Classy Classes
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.info = `${this.name}s age is ${this.age}`;
    }
    getInfo() {
        return `${this.name}s age is ${this.age}`
    }
}
*/

//https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript
//Basic subclasses - Adam and Eve
/*
class Human {}

class Man extends Human {}
class Woman extends Human {}

class God {
    static create() {
        const man = new Man();
        const woman = new Woman();
        return [man, woman];
    }
}
*/

//https://www.codewars.com/kata/568018a64f35f0c613000054/train/javascript
//Finish Guess the Number Game
/*
class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(number) {
        switch (true) {
            case this.lives <= 0:
                throw new Error()
            case number === this.number:
                return true;
            case number !== this.number:
                this.lives -= 1
                return false;
            default:
                break;
        }
    }
}
*/