const input = require("./example");

function solution(n) {
  return "수박".repeat(Math.floor(n / 2)) + (n & 1 ? "수" : "");
}

const answer = solution(input);
console.log(answer);
