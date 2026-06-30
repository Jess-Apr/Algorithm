const input = require("./example");

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
