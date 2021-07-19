//TODO how setTimeout works?
//TODO other async funciton examples
//TODO more info about Promises
//TODO fetch 
//TODO async await

//Promises (pending, resolve, rejected)
const promise = new Promise((resolve, reject) => {
    let value = true;
    if (value) {
        resolve("value is true");
    } else {
        reject("value is false");
    }
});
promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("error => " + error);
    });

const container = document.querySelector(".img-container");
const btn = document.querySelector(".btn");
const url = "https://source.unsplash.com/random";

btn.addEventListener("click", () => {
    loadImage(url)
        .then((image) => {
            container.appendChild(image);
        })
        .catch((err) => {
            console.log(err);
        });
});

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.addEventListener("load", () => {
            resolve(img);
        });
        img.addEventListener("error", () => {
            reject(new Error(`Failed to load an image from ${url}`));
        });
        img.src = url;
    });
}
