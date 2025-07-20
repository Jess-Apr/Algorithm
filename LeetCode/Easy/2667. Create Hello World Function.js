const input = require("./example");

const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f(...input));
