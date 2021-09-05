const form = document.querySelector("#form");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(name.value, password.value);
    console.log("form submited");
});
