//TODO

/* .assign() */
//copies properties from source object to target object

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
//target - Object { a: 1, b: 4, c: 5 }
//returnedTarget - Object { a: 1, b: 4, c: 5 }

/* .create() */
//creates new object with custom prototype

const customPrototype = {type: 'human'};
const params = {name: 'Nick', age: 20}
const createdObject = Object.create(customPrototype, params)
console.log(createdObject)

/* .defineProperties() */
//defines new or changes existing properties of the object. Returns object
const car = {
    label: 'Sport',
    brand: 'BMW'
}
Object.defineProperties(car, {
    id: {
        configurable: false,
        enumerable: false,
        value: undefined,
        writable: false,
    }
})

console.log(car)