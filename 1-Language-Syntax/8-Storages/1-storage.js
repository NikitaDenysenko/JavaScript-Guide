const testArray = [
    {
        name: "Joe",
        age: 34,
    },
    {
        name: "Doe",
        age: 36,
    },
    {
        name: "Randy",
        age: 97,
    },
];

/* LocalStorage */
//stores data infinete time, can be clean by JS only or by cleaning browser cache
localStorage.clear();
localStorage.removeItem("second name");
localStorage.setItem("name", "Joe");
localStorage.setItem("people", JSON.stringify(testArray));
console.log(localStorage.getItem("name"));
console.log(JSON.parse(localStorage.getItem("people")));

/* SessionStorage */
//stores data, until user closes the browser, each browser tab contains unique data
sessionStorage.clear();
sessionStorage.removeItem("second name");
sessionStorage.setItem("name", "Joe");
sessionStorage.setItem("people", JSON.stringify(testArray));
console.log(sessionStorage.getItem("name"));
console.log(JSON.parse(sessionStorage.getItem("people")));

/* Cookies */
//stores data, that can be sent to the server in headers, stores data in setted time

document.cookie = 'name=Dutch; expires=' + new Date(2022,0,1).toUTCString()