//Closure - gives you an access to another's function's 
//scope from an inner function
//make private variables with closures

function outer() {
    let kindaPrivateVariable = '123';
    function inner() {
        console.log(`The password is ${kindaPrivateVariable}`);
    }
    return inner
}

// console.log(kindaPrivateVariable); - error

const getPassword = outer() ;
getPassword()

outer()()

