const repeatString = function (str, count) {
  let output = "";
  if (count < 0) {
    return "ERROR";
  }
  for (i = 0; i < count; i++) {
    output = output + str;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
