const input = require("./example");

function solution(a, b) {
  let answer = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
