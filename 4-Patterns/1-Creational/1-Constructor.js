//before
function Server(name, ip) {
    this.name = name
    this.ip = ip
}

Server.prototype.getURL = function () {
    return `https://${this.ip}:8080`
}

const server = new Server("AWS German", "82.21.32.32")
console.log(server.getURL())

//after
class SuperServer {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getURL() {
        return `https://${this.ip}:8080`
    }
}

const superServer = new SuperServer("AWS USA", "82.41.32.23")
superServer.getURL()
