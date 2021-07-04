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
console.log(textContent);

/* .getAtribute() .setAtribute() */
//13
