const input = require("./example");

const compose = function (functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }

    return x;
  };
};

const answer = compose(input[0])(input[1]);
console.log(answer);
