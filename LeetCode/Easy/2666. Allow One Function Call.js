const input = require("./example");

const once = function (fn) {
  let called = 0;

  return function (...args) {
    called++;

    if (called > 1) {
      return undefined;
    }

    return fn(...args);
  };
};

const onceFn = once(input[0]);
console.log(onceFn(...input[1][0]));
console.log(onceFn(...input[1][1]));
console.log(onceFn(...input[1][2]));
