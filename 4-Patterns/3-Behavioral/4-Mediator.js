class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this,to)
    }

    recive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if(to) {
            to.recive(message,from)
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].recive(message, from)
                }
            })
        }
    }
}

const nick = new User('Nick')
const den = new User('Den')
const joe = new User('Joe')

const room = new ChatRoom()

room.register(nick)
room.register(den)
room.register(joe)

den.send('Hello', nick)
nick.send("What's up", den)
joe.send('Global Hello')