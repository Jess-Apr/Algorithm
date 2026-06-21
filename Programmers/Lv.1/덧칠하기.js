const input = require("./example");

function solution(n, m, section) {
  let answer = 0;
  let paintedUntil = 0;

  for (const s of section) {
    if (s > paintedUntil) {
      answer++;
      paintedUntil = s + m - 1;
    }
  }

  return answer;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
