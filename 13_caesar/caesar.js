const caesar = function (str, shift) {
  let splittedStr = str.split("");
  let joinedStr = "";

  while (shift > 26) {
    shift -= 26;
  }
  while (shift < -26) {
    shift += 26;
  }

  splittedStr.forEach((char) => {
    let unicodeValue = char.charCodeAt(0);
    if (
      (unicodeValue >= 65 && unicodeValue <= 90) ||
      (unicodeValue >= 97 && unicodeValue <= 122)
    ) {
      unicodeValue += shift;

      if (
        97 <= char.charCodeAt(0) &&
        char.charCodeAt(0) <= 122 &&
        unicodeValue > 122
      ) {
        unicodeValue -= 26;
      }

      if (
        97 <= char.charCodeAt(0) &&
        char.charCodeAt(0) <= 122 &&
        unicodeValue < 97
      ) {
        unicodeValue += 26;
      }

      if (
        65 <= char.charCodeAt(0) &&
        char.charCodeAt(0) <= 90 &&
        unicodeValue < 65
      ) {
        unicodeValue += 26;
      }

      if (
        65 <= char.charCodeAt(0) &&
        char.charCodeAt(0) <= 90 &&
        unicodeValue > 90
      ) {
        unicodeValue -= 26;
      }

      char = String.fromCharCode(parseInt(unicodeValue));
    }

    joinedStr += char;
  });

  return joinedStr;
};

// Do not edit below this line
module.exports = caesar;
