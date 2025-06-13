const input = require("./example");

const reduce = function (nums, fn, init) {
  let sum = init;

  for (let n of nums) {
    sum = fn(sum, n);
  }

  return sum;
};

const answer = reduce(input[0], input[1], input[2]);
console.log(answer);
