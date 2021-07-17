// i++ vs ++i

// for, while, do while

//TODO for of, for in
//advantages: you can break out from the array, if you have to
const colors = ["red", "blue", "yellow",'green'];
for (const color of colors) {
   if(color === 'red'){
       break;
   }
   console.log(color)
}