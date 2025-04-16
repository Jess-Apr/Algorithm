const input = require("./example");

function solution(a, b) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}

const answer = solution(input[0], input[1]);
console.log(answer);
