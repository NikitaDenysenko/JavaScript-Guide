//https://www.codewars.com/kata/54eecc187f9142cc4600119e/train/javascript
//HTML Generator
/*
class HTMLGen {
    a(text) {
        return `<a>${text}</a>`
    }
    b(text) {
        return `<b>${text}</b>`
    }
    p(text) {
        return `<p>${text}</p>`
    }
    body(text) {
        return `<body>${text}</body>`
    }
    div(text) {
        return `<div>${text}</div>`
    }
    span(text) {
        return `<span>${text}</span>`
    }
    title(text) {
        return `<title>${text}</title>`
    }
    comment(text) {
        return `<!--${text}-->`;
    }
}
*/

//https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript
//Fun with ES6 Classes #2 - Animals and Inheritance
/*
My Solution
class Shark extends Animal {
    constructor(name,age,status) {
        super();
        this.name = name
        this.age = age
        this.status = status
        this.legs = 0
        this.species = 'shark'
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super();
        this.name = name;
        this.age = age;
        this.status = status;
        this.legs = 4;
        this.species = "cat";
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super()
        this.name = name;
        this.age = age;
        this.status = status;
        this.master = master;
        this.legs = 4;
        this.species = "dog";
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}
A better solution 

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
*/

//https://www.codewars.com/kata/56fbdda707cff41b68000de2/train/javascript
//Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
/*
class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get surfaceArea() {
        return (
            (2 * this.length * this.width) +
            (2 * this.length * this.height) +
            (2 * this.height * this.width)
        );
    }
    get volume() {
        return this.length * this.height * this.width
    }
}
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}
*/