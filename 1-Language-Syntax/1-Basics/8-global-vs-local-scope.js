//Global vs Local scopes

let myName = "Nick";

function sayMyName() {
    //if "myName" does not exists in function - it takes value
    //from global scope.

    //if "myName" does exists in function - it takes value
    //from the function scope (local)

    //console.log(myName);

    let myName = "Joe";
    console.log(myName);
}

sayMyName();
