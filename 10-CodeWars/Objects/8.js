//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
//Lario and Muigi Pipe Problem
/* 
const pipeFix = (numbers) => {
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    const result = []
    for(let i = min; i <= max; i++) {
        result.push(i)
    }
    return result
}
*/

//https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
//Welcome!
/* 
const greetings = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  }
My solution:
const greet = (language) =>
    greetings[language] ? greetings[language] : greetings["english"];

A better solution:
const greet = (language) =>
    greetings[language] || greetings["english"];
*/

//https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
//Regular Ball Super Ball
/*
class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}
*/

//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
//Crash Override
/*
const allFirstNames = {
    A: "Alpha",
    B: "Beta",
    C: "Cache",
    D: "Data",
    E: "Energy",
    F: "Function",
    G: "Glitch",
    H: "Half-life",
    I: "Ice",
    J: "Java",
    K: "Keystroke",
    L: "Logic",
    M: "Malware",
    N: "Nagware",
    O: "OS",
    P: "Phishing",
    Q: "Quantum",
    R: "RAD",
    S: "Strike",
    T: "Trojan",
    U: "Ultraviolet",
    V: "Vanilla",
    W: "WiFi",
    X: "Xerox",
    Y: "Y",
    Z: "Zero",
};

const allSurnames = {
    A: "Analogue",
    B: "Bomb",
    C: "Catalyst",
    D: "Discharge",
    E: "Electron",
    F: "Faraday",
    G: "Gig",
    H: "Hacker",
    I: "IP",
    J: "Jabber",
    K: "Killer",
    L: "Lazer",
    M: "Mike",
    N: "n00b",
    O: "Overclock",
    P: "Payload",
    Q: "Quark",
    R: "Roy",
    S: "Spy",
    T: "T-Rex",
    U: "Unit",
    V: "Virus",
    W: "Worm",
    X: "X",
    Y: "Yob",
    Z: "Zombie",
};

function aliasGen(firstName, surname) {
    const isFirstNameStartsWithNumber = Number.isInteger(
        parseInt(firstName[0])
    );
    const isSurnameStartsWithNumber = Number.isInteger(parseInt(surname[0]));

    return isFirstNameStartsWithNumber || isSurnameStartsWithNumber
        ? "Your name must start with a letter from A - Z."
        : `${allFirstNames[firstName[0].toUpperCase()]} ${allSurnames[surname[0].toUpperCase()]}`;
}
*/

//https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript
//Grasshopper - Terminal Game #1
/* 
class Hero {
    constructor(
        name = "Hero",
    ) {
        this.name = name;
        this.position = "00";
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}
*/

//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
//Job Matching #1
/* 
const match = (candidate, job) => {
    if(!candidate.minSalary || !job.maxSalary) {
        throw new Error()
    }
    return candidate.minSalary - candidate.minSalary * 0.1 <= job.maxSalary;
}
*/