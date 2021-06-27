//10. Objects//

const car = {
    name: "Lamborgini",
    speed: 400,
    isFast: true,
    colors: ["yellow", "green", "red", "blue"],
    //with function name
    startEngine1: function startTheCar() {
        console.log("Starting the engine");
    },
    //anonymous funciton
    startEngine2: function () {
        console.log("Starting the engine");
    },
    //ES6 version
    startEngine() {
        console.log("Starting the engine");
    },
};

car.speed = 440;

console.log(car);
//function object???
