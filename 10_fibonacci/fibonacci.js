const fibonacci = function (index) {
  if (index < 0) return "OOPS";
  if (isNaN(index)) {
    index = parseInt(index);
    if (isNaN(index)) return "ERROR";
  }
  let x = 0;
  let y = 0;
  let z = 0;
  for (i = 0; i < index; i++) {
    z = x + y;
    if (z == 0) z = 1;
    x = y;
    y = z;
  }
  return z;
};

// Do not edit below this line
module.exports = fibonacci;
