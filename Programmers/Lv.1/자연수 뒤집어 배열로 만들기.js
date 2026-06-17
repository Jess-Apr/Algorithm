const input = require("./example");

function solution(n) {
  return String(n).split("").reverse().map(Number);
}

const answer = solution(input);
console.log(answer);
