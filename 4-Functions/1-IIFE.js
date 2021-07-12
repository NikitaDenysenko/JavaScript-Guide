//IIFE - immideately invoked function expresion
//older approach - new Modules
//simple approach to avoid global scope pollution
//good way at protecting the scope of your function and the varialbles within it

//IIFE example
(function testSelf(user) {
    console.log(`invoked myself by ${user}`);
})("User");

//with return
const sum = (function testSelf(num1, num2) {
    return num1 + num2;
})(23, 87);
console.log(sum);
