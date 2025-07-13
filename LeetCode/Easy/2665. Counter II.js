const input = require("./example");

const createCounter = function (n) {
  let count = n;

  return {
    increment: () => {
      count = count + 1;
      return count;
    },
    decrement: () => {
      count = count - 1;
      return count;
    },
    reset: () => {
      count = n;
      return count;
    },
  };
};

const counter = createCounter(input);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
