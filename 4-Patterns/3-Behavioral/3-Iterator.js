class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false,
                    }
                } else {
                    this.index = 0
                    return {
                        value: undefined,
                        done: true,
                    }
                }
            },
        }
    }
}
//example with generator
function* generator(collection) {
    let index = 0

    while (index < collection.length) {
        yield collection[index++]
    }
}

const data = ["This", "is", "my", "iterator"]

const iterator = new MyIterator(data)
// for (const val of iterator) {
//     console.log("Value: " + val)
// }

const gen = generator(data)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
