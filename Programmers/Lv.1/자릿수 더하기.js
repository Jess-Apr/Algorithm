const input = require("./example");

function solution(n) {
  return String(n)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

const answer = solution(input);
console.log(answer);
