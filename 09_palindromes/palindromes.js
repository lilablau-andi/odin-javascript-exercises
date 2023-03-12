const palindromes = function (str) {
  let palim = "";
  //   remove White Space
  str = str.replace(/\s/g, "");
  //   remove Special Characters
  str = str.replace(/[^a-zA-Z0-9 ]/g, "");
  str = str.toLowerCase();
  console.log(str);

  for (i = 0; i < str.length; i++) {
    palim += str.charAt(str.length - i - 1);
  }
  console.log(palim);
  if (palim === str) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
