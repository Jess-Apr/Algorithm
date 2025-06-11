const input = require("./example");

const createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(input);
console.log(counter());
