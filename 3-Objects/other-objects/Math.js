//TODO add console.log()'s

/* .abs() */
//returns absolute (not negative) number
console.log(Math.abs(-4));
console.log(Math.abs(9));
console.log(Math.abs("-3"));
console.log(Math.abs("3"));
console.log(Math.abs(null));
console.log(Math.abs(undefined));

/* .round() */
//rounds number to the nearest int
console.log(Math.round(8.1));
console.log(Math.round(8.9));
console.log(Math.round(-8.9));
console.log(Math.round(-8.1));

/* .ceil() */
//rounds a number up to the next largest integer
console.log(Math.ceil("8.3324"));
console.log(Math.ceil("-7.002356"));
console.log(Math.ceil(10.00034827));
console.log(Math.ceil(-10.273842));
console.log(Math.ceil(null));
console.log(Math.ceil(undefined));

/* .floor() */
//rounds a number up to the next least integer
console.log(Math.floor(10.3482732));
console.log(Math.floor(-10.273842));
console.log(Math.floor("8.3324"));
console.log(Math.floor("-7.002356"));
console.log(Math.floor(null));
console.log(Math.floor(undefined));

/* .max() */
//returns maximum value
console.log(Math.max(2, 5, 7, 3, 5, 99, 35));
console.log(Math.max("3", "4", "2", "100"));
console.log(Math.max(null));
console.log(Math.max(undefined));

/* .min() */
//returns minimum value
console.log(Math.min(2, 5, 7, 3, 5, 99, 35));
console.log(Math.min("3", "4", "-21", "100"));
console.log(Math.min(null));
console.log(Math.min(undefined));

/* .pow() */
//returns value in exponent power
console.log(Math.pow(2, 3));
console.log(Math.pow("2", "5"));
console.log(Math.pow(10, 3));

/* .sqrt() */
//returns the square root of a number
console.log(Math.sqrt(9));
console.log(Math.sqrt("36"));

/* .sign() */
//returns -1,1,0 (-1 for '-', 1 for '+', 0 for 0) depending on numbr's sign
console.log(Math.sign(-9));
console.log(Math.sign(83));
console.log(Math.sign(0));

/* .random() */
//returns pseudo random value (from 0 to 1)
console.log(Math.random());

//random int funtion
const randomInt = (limit) => {
    return Math.floor(Math.random() * limit) + 1;
};
console.log(randomInt(100));

//random float function

//variant 1
const randomFloat1 = (limit) => {
    return Math.floor(Math.random() * limit) / limit;
};
console.log(randomFloat1(100));

//variant 2
const randomFloat2 = () => {
    return Math.random().toFixed(2);
};
console.log(randomFloat2());
