const paragraphWithId = document.getElementById("testParagraph");
paragraphWithId.style.color = "red";

/* getElementById */
const btn = document.getElementById("btn");
btn.style.backgroundColor = "blue";

/* getElementsByTagName */
//return node-list (array-like object)
const listElements = document.getElementsByTagName("li");
listElements[2].style.color = "yellow";

//will throw an error, because listElements is not an array
// listElements.map((item) => {
//     console.log(item);
// });

const betterListElements = [...listElements];

// will work, because betterListElements is now an array
betterListElements.map((item) => {
    //console.log(item);
});

/* .getElementsByClassName() */
const listItems = document.getElementsByClassName("item");

/* .querySelector(), .querySelectorAll() */
const ul = document.querySelector("#result");

const li = document.querySelectorAll(".item");

/* children */
const childNodes = ul.childNodes;
const children = ul.children;
const firstChild = ul.firstChild;
const lastChild = ul.lastChild;
const firstElementChild = ul.firstElementChild;
const lastElementChild = ul.lastElementChild;

/* parents */
const heading = document.querySelector(".heading");
const parentElement = heading.parentElement;

/* siblings */
const firstItemElement = document.querySelector("ul").firstElementChild;
const lastItemElement = document.querySelector("ul").lastElementChild;
const secondElement = firstItemElement.nextSibling.nextSibling; //???
const secondItemElement = firstItemElement.nextElementSibling;
const preLastElement = lastItemElement.previousSibling.previousSibling; //???
const preLastItemElement = lastItemElement.previousElementSibling;

/* .textContent .nodeValue */
//access text content in element
const nodeValue = heading.firstChild.nodeValue;
const textContent = heading.textContent;
//console.log(textContent);

/* .getAtribute() .setAtribute() */
const underlineElement = document.querySelector(".underline");
const attributeClass = underlineElement.getAttribute("class");
underlineElement.setAttribute("id", "unique");
// .setAttribute() - overrides attribute

/* .classList() .className() */
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");

const classValue = first.className;

//will override the class
//first.className = 'red'

//add more then one class
second.className = "blue white";

third.classList.add("blue", "white");
third.classList.remove("white");
const isClassPresent = third.classList.contains("blue"); //reutrn boolean

/* .createElement('element) */
/* .createTextNode('text content') */
/* element.appendChild(childElement) */
/* insertBefore('element', 'location') */
/* replaceChild('element', 'location') */

const bodyDiv = document.createElement("div");
const text = document.createTextNode("sample text");
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const appendedLi = document.createElement("li");
const textForLi = document.createTextNode("six");
appendedLi.classList.add("black");
appendedLi.appendChild(textForLi);

const main = document.querySelector(".main");
main.insertBefore(appendedLi, ul);

const content = document.querySelector(".content");
const h6 = document.querySelector(".content h6");

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode("small h6 text");
smallHeading.setAttribute("class", "green");
smallHeading.appendChild(smallText);
content.replaceChild(smallHeading, h6);

/* .prepend .innerText */
const biggerHeading = document.createElement("h4");
biggerHeading.innerText = "powered by h4 tag";
document.body.prepend(biggerHeading);

/* EVENTS */

/* .addEventListener() */
const button = document.querySelector(".events .btn");
const eventHeading = document.querySelector(".events h1");

/* click event */
//click - fires after full action occures
button.addEventListener("click", () => {
    const hasClass = eventHeading.classList.contains("red");
    hasClass
        ? eventHeading.classList.remove("red")
        : eventHeading.classList.add("red");
});
/* mouse events */
//mousedown - button is pressed
//mouseup - button is released
//mouseenter - moved onto an element
//mouseleave - moved out of an element
button.addEventListener("mouseenter", () => {
    button.classList.add("green");
    console.log("you entered the button");
});
button.addEventListener("mouseleave", () => {
    button.classList.remove("green");
    console.log("you left the button");
});
button.addEventListener("mousedown", () => {
    console.log("button is pressed");
});
button.addEventListener("mouseup", () => {
    console.log("button is released");
});
button.addEventListener("click", () => {
    console.log("button is clicked");
});

/* key events */
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released
const input = document.querySelector(".events input");

input.addEventListener("keypress", () => {
    console.log("you pressed a key");
});
input.addEventListener("keydown", () => {
    console.log("keydown");
});
//to get value from input
input.addEventListener("keyup", () => {
    console.log("keyup");
    console.log(input.value);
});

/* Event Object! */
const headingH3 = document.querySelector("#heading");
const link = document.querySelector("#link");

headingH3.addEventListener("click", (event) => {
    console.log(event.type);
    console.log(event.currentTarget);
    event.currentTarget.classList.add("blue");
});

link.addEventListener("click", (event) => {
    event.preventDefault();
});

/* .currentTarget vs .target */
//currentTarget - refers to the element to which the event handler has been attached
//target - identifies the element on which the event occured
const btns = document.querySelectorAll(".btn-s");
//console.log(btns);
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        // console.log(event.currentTarget);
        // event.currentTarget.style.color = "yellow";

        event.target.style.color = "yellow";
    });
});

/* propagation, bubbling, capturing */
//event propagation - ????
//event bubbling - ?????
//event capturing - ????
const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(event) {
    console.log("current targent", event.currentTarget);
    console.log(" targent", event.target);
}

function stopPropagation(event) {
    event.stopPropagation();
}

list.addEventListener("click", stopPropagation);
//list.addEventListener("click", stopPropagation, {capture: true}); {capture: true} ?????
container.addEventListener("click", showBubbling);
