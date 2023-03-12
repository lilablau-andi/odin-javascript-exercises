const removeFromArray = function () {
  let arr = arguments[0];

  for (i = 1; i < arguments.length; i++) {
    arr.forEach((arrItem, index) => {
      //   console.log(
      //     "ArrayItem: " + arrItem + "|| Arguments Item: " + arguments[i]
      //   );
      if (arrItem === arguments[i]) arr.splice(index, 1);
    });
  }

  console.log(arr);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
