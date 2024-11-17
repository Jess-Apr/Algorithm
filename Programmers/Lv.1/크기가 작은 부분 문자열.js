const input = require("./example");

function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const num = t.slice(i, i + p.length);
    if (+num <= p) answer++;
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
