class OldCalc {
    operations(turn1, turn2, operation) {
        switch(operation) {
            case 'add':
                return turn1 + turn2
            case 'sub':
                return turn1 - turn2
            default:
                return NaN
        }
    }
}

class NewCalc {
    add(turn1, turn2) {
        return turn1 + turn2
    }
    sub(turn1, turn2) {
        return turn1 - turn2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }
    operations(turn1, turn2, operation) {
        switch(operation) {
            case 'add':
                return this.calc.add(turn1, turn2)
            case 'sub':
                return this.calc.sub(turn1, turn2)
            default:
                return NaN
        }
    }
}