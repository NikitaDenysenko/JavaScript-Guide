const car = {
    wheels: 4,
    init() {
        console.log(`I have ${this.wheels} wheels`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Nick'
    }
})
console.log(carWithOwner.__proto__ === car)
carWithOwner.init()