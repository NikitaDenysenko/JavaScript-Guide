class Complaints {
    constructor() {
        this.complains = []
    }

    reply(complaint) {}

    add(complaint) {
        this.complains.push(complaint)
        return this.reply()
    }
}

class ProductComplains extends Complaints {
    reply({id,customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}
class ServiceComplains extends Complaints {
    reply({id,customer, details}) {
        return `Service: ${id}: ${customer} (${details})`
    }
}
//facade
class ComplaintRegistry {
    register(customer,type, details) {
        const id = Date.now()
        let complaint
        if(type === 'service') {
            complaint = new ServiceComplains()
        } else {
            complaint = new ProductComplains()
        }
        return complaint.add({id, customer, details})
    }
}
const registry = new ComplaintRegistry()
console.log(registry.register('Nick', 'service', 'the service is crap'))