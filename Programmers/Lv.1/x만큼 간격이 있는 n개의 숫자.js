const input = require("./example");

function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
