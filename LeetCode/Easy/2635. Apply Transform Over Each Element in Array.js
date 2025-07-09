const input = require("./example");

const map = function (arr, fn) {
  const newArr = arr.map((val, i) => fn(val, i));
  return newArr;
};

const mappedArr = map(input[0], input[1]);
console.log(mappedArr);
