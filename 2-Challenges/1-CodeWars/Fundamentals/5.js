//https://www.codewars.com/kata/566b490c8b164e03f8000002/train/javascript
//80's Kids #6: Rock 'Em, Sock 'Em Robots
/*
const takeDamage = (health, damage) => {
    return health - damage
}

const checkWinner = (
    robot1,
    robot2,
    firstTacticsCounter,
    secondTacticsCounter
) => {
    if (
        firstTacticsCounter >= robot1.tactics.length &&
        secondTacticsCounter >= robot2.tactics.length
    ) {
        if(robot1.health > robot2.health) {
            return `${robot1.name} has won the fight.`
        }
        if(robot2.health > robot1.health) {
            return `${robot2.name} has won the fight.`
        }
        if(robot2.health === robot1.health) {
            return "The fight was a draw."
        }
    }
    if (robot1.health <= 0) {
        return `${robot2.name} has won the fight.`
    }
    if (robot2.health <= 0) {
        return `${robot1.name} has won the fight.`
    }
    if (robot2.health <= 0 && robot1.health <= 0) {
        return "The fight was a draw."
    }
    return ""
}

const fight = (first, second, tactics) => {
    //make variables global
    let firstTacticsCounter = 0
    let secondTacticsCounter = 0
    let result = ""
    let attacksFirst =
        first.speed > second.speed || first.speed === second.speed

    while (!result) {
        if (attacksFirst) {
            if (firstTacticsCounter < first.tactics.length) {
                second.health = takeDamage(
                    second.health,
                    tactics[first.tactics[firstTacticsCounter]]
                )
                firstTacticsCounter++
            }
            attacksFirst = !attacksFirst
            result = checkWinner(
                first,
                second,
                firstTacticsCounter,
                secondTacticsCounter
            )
        } else {
            if (secondTacticsCounter < second.tactics.length) {
                first.health = takeDamage(
                    first.health,
                    tactics[second.tactics[secondTacticsCounter]]
                )
                secondTacticsCounter++
            }
            attacksFirst = !attacksFirst
            result = checkWinner(
                first,
                second,
                firstTacticsCounter,
                secondTacticsCounter
            )
        }
    }
    return result
}*/