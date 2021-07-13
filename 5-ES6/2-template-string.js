const person = {
    name: "Nick",
    age: 20,
    job: "developer",
    hobbies: ["music", "books", "cycling"],
};
//regular template string
const templateStrring = `This is ${person.name} and he is ${person.age}`;

//template string with innerHTML
const info = document.querySelector("#info");
info.innerHTML = `
    <h1>Hello from template string</h1>
    <h2>My name is ${name} and my hobbies are</h2>
    <ul>
    ${person.hobbies.map((hobby) => `<li>${hobby}</li>`).join("")}
    </ul>
`;

//tagged template literals

const testTagged = (text, ...args) => {
    console.log({ text, args });
    const highLightedText = text.map((item, index) => {
        return `${item} <strong>${args[index] || ""}</strong>`
    })
    return highLightedText
};
const teggedTemplateLiterals = testTagged`This is ${person.name} and he is ${person.age}`;

const highlight = document.querySelector('#highlight')
highlight.innerHTML = teggedTemplateLiterals

