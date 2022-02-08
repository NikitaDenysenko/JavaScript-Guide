/* Open/Closed Principle */
//Расширяйте классы, но не изменяйте их первоначальный код.
//Открыты для разширения, но закрыты для изменении
//usage of composition, inheretance
//instead of changing code, you want to create new code, and that new code is going to work with your old code, in order to do things

class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printDescription() {
        console.log(this.description)
    }

    printQuize() {
        console.log('1 true')
        console.log('2 false')
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printDescription() {
        console.log(this.description)
    }

    printQuize() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1} ${option}`)
        }) 
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description
    }

    printDescription() {
        console.log(this.description)
    }

    printQuize() {
        console.log('Answer: ______') 
    }
}

const printQuize = (questions) => {
    questions.forEach((question) => {
        question.printDescription()
        question.printQuize()
    })
}

const questions = [
    new BooleanQuestion('Have you learned something new?'),
    new MultipleChoiceQuestion('What is you favorite language?',['JS', 'Java', 'C++', 'Python']),
    new TextQuestion('What did you learn about SOLID?')
]
printQuize(questions)


/* BAD CODE! */
//original code was modified, which can lead to errors and regretion testing

// const printQuize = (questions) => {
//     questions.forEach((question) => {
//         console.log(question.description)
//         switch(question.type) {
//             case 'boolean':
//                 console.log('1 true')
//                 console.log('2 false')
//                 break
//             case 'multipleChoice':
//                 question.options.forEach((option, index) => {
//                     console.log(`${index + 1} ${option}`)
//                 })    
//                 break
//             case 'text':
//                 console.log('Answer_______') 
//                 break   
//         }
//     })
// }

// const questions = [
//     {
//         type: 'boolean',
//         description: 'Have you learned something new?'
//     },
//     {
//         type: 'multipleChoice',
//         description: 'What is you favorite language?',
//         options: ['JS', 'Java', 'C++', 'Python'],
//     },
//     {
//         type: 'text',
//         description: 'What did you learn about SOLID?'
//     },
// ]

// printQuize(questions)