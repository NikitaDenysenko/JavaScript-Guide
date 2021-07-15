//TODO Make a table out of it (toDateString)

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturtday",
];
/* different ways, to craete date */
const date1 = new Date();
const date2 = new Date("2021", "8", "6", "32", "88", "43", "650");
const date3 = new Date("2013-03-01T01:10:00");
console.log({ date1, date2, date3 });

const date = new Date();

console.log("Getting the Date");

/* .getDate */
//returns day of the month (1-31) of the date
console.log(date.getDate());

/* .getDay() */
//returns day of the week (0-6) of the date
console.log(date.getDay());

/* .getFullYear() */
//returns 4-digit year of the date
console.log(date.getFullYear());

/* .getHours() */
//returns hourse (0-23) of the date
console.log(date.getHours());

/* .getMilliseconds() */
//returns miliseconds (0-999) of the date
console.log(date.getMilliseconds());

/* .getMinutes() */
//returns minutes (0-59) of the date
console.log(date.getMinutes());

/* .getMonth() */
//returns month (0-11) of the date
console.log(date.getMonth());

/* .getSeconds() */
//returns second (0-59) of the date
console.log(date.getSeconds());

/* .getTime() */
//returns time in milliseconds
console.log(date.getTime());

console.log("Setting the date");

const newDate = new Date(1962, 6, 7);

/* .setDate */
//sets day of the month (1-31) of the date

//console.log(newDate)
//newDate.setDate(3);
//console.log(newDate);

/* .setFullYear() */
//sets 4-digit year of the date

// console.log(newDate);
// newDate.setFullYear(1984);
// console.log(newDate);

/* .setHours() */
//sets hourse (0-23) of the date

// console.log(newDate);
// newDate.setHours(13);
// console.log(newDate);

/* .setMilliseconds() */
//sets miliseconds (0-999) of the date

// console.log(newDate);
// newDate.setMilliseconds(777);
// console.log(newDate);

/* .setMinutes() */
//sets minutes (0-59) of the date

// console.log(newDate);
// newDate.setMinutes(45);
// console.log(newDate);

/* .setMonth() */
//sets month (0-11) of the date

// console.log(newDate);
// newDate.setMonth(10);
// console.log(newDate);

/* .setSeconds() */
//sets second (0-59) of the date

// console.log(newDate);
// newDate.setSeconds(45);
// console.log(newDate);

/* .setTime() */
//sets time in milliseconds

// console.log(newDate);
// newDate.setSeconds(1337228);
// console.log(newDate);


