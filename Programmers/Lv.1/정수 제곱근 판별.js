const input = require("./example");

function solution(n) {
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

const answer = solution(input);
console.log(answer);
