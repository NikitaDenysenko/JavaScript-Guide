/*** let ***/

//Can't be redeclared
/*
    let x = "John Doe";
    let x = 0;
    SyntaxError: 'x' has already been declared
*/

//Block Scope
/*
    {
    let x = 2;
    }
    // x can NOT be used here
*/

//Can be reassigned
/*
    let num = 87
    num = 56
*/

//NOT Hoisted


/*** const ***/

//Can't be redeclared
/*
    const x = "John Doe";
    const x = 0;
    SyntaxError: 'x' has already been declared
*/

//Block Scope
/*
    {
    const x = 2;
    }
    // x can NOT be used here
*/

//Can't be reassigned
/*
    const num = 87
    num = 56
    //TypeError: Assignment to constant variable.
*/

//Must be assigned (have value)
/*
    const PI;
    PI = 3.14159265359;
    //Error
*/

//NOT Hoisted


/*** var  ***/

//Can be redeclared
/*
    var x = "John Doe";
    var x = 0;
*/

//Funciton Scope
/*
    if(condition) {
        var y = 3
    }
    console.log(y) // 3

    function {
        var x = 2;
    }
    // x can NOT be used here
*/

//Can be reassigned
/*
    var num = 87
    num = 56
*/

//Hoisted
