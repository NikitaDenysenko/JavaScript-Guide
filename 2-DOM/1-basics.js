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
