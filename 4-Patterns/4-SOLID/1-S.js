/* Single Responsibility Principle */
//У класса должна быть только один мотив для изменения.
//All clases, modules, functions should have single responsibility 
//One reason to be changed (rewrite code)

// class only tracks, and uses separate method for logging
const logTemperatureSurplus = () => {
    console.log('Max temperature reached')
}

class TemperatureTracker {
    constructor(maxTemperature) {
        this.maxTemperature = maxTemperature
        this.currentTemperature = 0
    }

    trackTemperature(temperature) {
        this.currentTemperature += temperature
        if (this.currentTemperature > this.maxTemperature) {
            logTemperatureSurplus()
        }
    }
}

/* !! BAD CODE !! */
// class logs and tracks at the same time

// class TemperatureTracker {
//     constructor(maxTemperature) {
//         this.maxTemperature = maxTemperature
//         this.currentTemperature = 0
//     }

//     trackTemperature(temperature) {
//         this.currentTemperature += temperature
//         if (this.currentTemperature > this.maxTemperature) {
//             this.logTemperatureSurplus()
//         }
//     }

//     logTemperatureSurplus() {
//         console.log('Max temperature reached')
//     }
// }