/* Array.from() */
//turns array-like(objects with property 'length') into array (string, Set, nodeList etc)
const testArr = Array.from("qwertyu");//[ 'q', 'w', 'e', 'r', 't', 'y', 'u' ]
//can accept map function
Array.from("136476", (element) => parseInt(element));//[ 1, 3, 6, 4, 7, 6 ]

/* Array.isArray()  */
//returns true, if passed object is array
const arr = [1,5,36,85,2]
const obj = {name: 'Mike', age: 23}

Array.isArray(arr)//true
Array.isArray(obj)//false

/* Array.of() */
//creates array of passed arguments
Array.of(1, "23123", "st", {});//[ 1, '23123', 'st', {} ]
