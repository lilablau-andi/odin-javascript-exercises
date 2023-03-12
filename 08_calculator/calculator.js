const add = function (...args) {
  let sum = 0;
  args.forEach((arg) => {
    sum += arg;
  });
  return sum;
};

const subtract = function (...args) {
  let sum;
  args.forEach((arg) => {
    if (sum) sum -= arg;
    else sum = arg;
  });
  return sum;
};

const sum = function (...args) {
  let sum = 0;
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      arg.forEach((arrItem) => {
        sum += arrItem;
      });
    } else {
      sum += arg;
    }
  });
  return sum;
};

const multiply = function (...args) {
  let mult;
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      arg.forEach((argItem) => {
        if (mult) mult *= argItem;
        else mult = argItem;
      });
    } else {
      if (mult) mult *= arg;
      else mult = arg;
    }
  });
  return mult;
};

const power = function (...args) {
  let pow;
  args.forEach((arg) => {
    if (pow) pow = Math.pow(pow, arg);
    else pow = arg;
  });
  return pow;
};

const factorial = function (num) {
  if (num == 0) return 1;

  for (i = num - 1; i > 1; i--) {
    num *= i;
  }

  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
