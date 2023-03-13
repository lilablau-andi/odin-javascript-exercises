const findTheOldest = function (arr) {
  let oldestObj;
  arr.forEach((obj) => {
    if (oldestObj == null || oldestObj == undefined) oldestObj = obj;

    if (obj.yearOfDeath == undefined)
      obj.yearOfDeath = new Date().getFullYear();

    if (
      obj.yearOfDeath - obj.yearOfBirth >
      oldestObj.yearOfDeath - oldestObj.yearOfBirth
    )
      oldestObj = obj;
  });
  return oldestObj;
};

// Do not edit below this line
module.exports = findTheOldest;
