//
//
/*
Unfortunatly, CodeWars doesn't support BigInt, but here is my solution
const upArray = (arr) => {
    let hasNegative = false;
    arr.forEach((element) => {
        if (element < 0) {
            hasNegative = true;
        }
    });
    const largeNumber = BigInt(arr.join("")) + BigInt(1);
    return hasNegative ? null : largeNumber.toString().split("").map(Number);
};
And this is what I submitted 
const upArray = (arr) => {
  if (
    arr.length === 0 ||
    arr.filter((n) => n >= 0 && n <= 9).length !== arr.length
  ) {
    return null;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      arr[i] = 0;
      if (i === 0) {
        arr.unshift(1);
      }
    } else {
      arr[i] += 1;
      break;
    }
  }
  return arr;
};
*/
