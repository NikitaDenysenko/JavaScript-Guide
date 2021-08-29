/* .abs() */
//returns absolute (not negative) number
Math.abs(-4); //4
Math.abs(9); //9
Math.abs("-3"); //3
Math.abs("3"); //3
Math.abs(null); //0
Math.abs(undefined); //NaN

/* .round() */
//rounds number to the nearest int
Math.round(8.1);//8
Math.round(8.9);//9
Math.round(-8.9);//-9
Math.round(-8.1);//-8

/* .ceil() */
//rounds a number up to the next largest integer
Math.ceil("8.3324");//9
Math.ceil("-7.002356");//-7
Math.ceil(10.00034827);//11
Math.ceil(-10.273842);//-10
Math.ceil(null);//0
Math.ceil(undefined);// NaN

/* .floor() */
//rounds a number up to the next least integer
Math.floor(10.3482732); //10
Math.floor(-10.273842); //-11
Math.floor("8.3324"); //8
Math.floor("-7.002356"); //-8
Math.floor(null); //0
Math.floor(undefined); //NaN

/* .max() */
//returns maximum value
Math.max(2, 5, 7, 3, 5, 99, 35); //99
Math.max("3", "4", "2", "100"); //100
Math.max(null); //0
Math.max(undefined); //NaN

/* .min() */
//returns minimum value
Math.min(2, 5, 7, 3, 5, 99, 35); //2 
Math.min("3", "4", "-21", "100"); //-21
Math.min(null); //0
Math.min(undefined); //NaN

/* .pow() */
//returns value in exponent power
Math.pow(2, 3); //8
Math.pow("2", "5"); //32
Math.pow(10, 3); //1000

/* .sqrt() */
//returns the square root of a number
Math.sqrt(9); //3
Math.sqrt("36"); //6

/* .sign() */
//returns -1,1,0 (-1 for '-', 1 for '+', 0 for 0) depending on numbr's sign
Math.sign(-9); //-1
Math.sign(83); //1
Math.sign(0); //0

/* .random() */
//returns pseudo random value (from 0 to 1)
Math.random(); //(one of examples) 0.9252364335439884

//random int funtion
const randomInt = (limit) => {
    return Math.floor(Math.random() * limit) + 1; //(one of examples) 90
};

//random float function

//variant 1
const randomFloat1 = (limit) => {
    return Math.floor(Math.random() * limit) / limit; // (one of examples) 0.89
};

//variant 2
const randomFloat2 = () => {
    return Math.random().toFixed(2); //(one of examples) 0.26
};