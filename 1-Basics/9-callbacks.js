//Functions are first class objects - stored in a variable
//(expresion), passed as an argument to another function, return from the function (closure)

//Higher Order function - accepts another function as an argument
// or returns another function as a result

//Callback function - passed to another function as an argument
//and executed inside that function

function morning() {
    return "Good Morning";
}

function greet(name, callBack) {
    const dayTime = callBack();
    return `${dayTime} ${name}`;
}

console.log(greet("Boby", morning));
