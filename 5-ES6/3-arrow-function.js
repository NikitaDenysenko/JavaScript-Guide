// key deference - 'this' keyword!
// regular function - 'this' referse to the parent (left of the dot)
// arrow funciton - 'this' referse to it's current surrounding scope
//TODO more notes about 'this' in arrow function

const parent = {
    name: "Jake",
    age: 52,
    status: "parrent",
    job: "driver",
    sayThis: () => {
        console.log(this);
    },
    child: {
        name: "Mike",
        age: 12,
        status: "child",
        sayThis: () => {
            console.log(this);
        },
    },
};
parent.sayThis();

function testScope() {
    parent.sayThis();
}
testScope();

//with button
const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
    event.target.style.color = "blue";
});

//default parametrs
const present = (product = "Box") => {
    console.log(`I present to you our new product - ${product}`);
};
present();
