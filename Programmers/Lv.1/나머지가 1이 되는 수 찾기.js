const input = require("./example");

function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) return i;
  }
}

const answer = solution(input);
console.log(answer);
