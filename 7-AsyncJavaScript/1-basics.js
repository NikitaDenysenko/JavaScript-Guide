const boilWater = (time) => {
    console.log("boiling...");
    //TODO how setTimeout works?
    setTimeout(() => {
        console.log("done");
    }, time);
};
boilWater(3000);
console.log("chop carots");
