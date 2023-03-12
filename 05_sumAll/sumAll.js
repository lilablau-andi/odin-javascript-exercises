const sumAll = function (x, y) {
  let largeNum;
  let smallNum;

  if (x > 0 && y > 0 && Number.isInteger(x) && Number.isInteger(y)) {
    if (y < x) {
      largeNum = x;
      smallNum = y;
    } else {
      largeNum = y;
      smallNum = x;
    }

    let sum = smallNum;
    for (i = smallNum + 1; i <= largeNum; i++) {
      sum += i;
      // console.log(i);
    }
    return sum;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
