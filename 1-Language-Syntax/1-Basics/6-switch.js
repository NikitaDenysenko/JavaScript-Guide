//12. switch//
const myAge = 20;

switch (myAge) {
    case 20:
        console.log("you are not a kid anymore");
        break;
    default:
        console.log("life is hard((");
        break;
}

switch (true) {
    case myAge > 20:
        console.log("you are adult");
        break;
    default:
        console.log("life is hard((");
        break;
}
