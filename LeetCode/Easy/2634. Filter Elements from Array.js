const input = require("./example");

const filter = function (arr, fn) {
  const newArr = arr.filter((val, i) => fn(val, i));
  return newArr;
};

const filteredArr = filter(input[0], input[1]);
console.log(filteredArr);
