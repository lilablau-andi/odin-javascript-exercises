const reverseString = function (str) {
  let newStr = "";
  let cutStr = str;

  for (i = 0; i < str.length; i++) {
    newStr = newStr + cutStr.charAt(cutStr.length - 1);
    cutStr = cutStr.slice(0, cutStr.length - 1);
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
