class SimpleMembership{
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}
class StandartMembership{
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}
class PremiumMembership{
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MembershipFactory {
    static list = {
        simple: SimpleMembership,
        standart: StandartMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MembershipFactory.list[type]
        const member = new Membership(name)
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        member.type = type
        return member
    }
}
const facotry = new MembershipFactory()

const members = [
    facotry.create('Nick'),
    facotry.create('Den', 'premium'),
    facotry.create('John', 'standart'),
]
console.log(members)