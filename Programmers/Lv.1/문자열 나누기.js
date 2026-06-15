const input = require("./example");

function solution(s) {
  let answer = 0;

  let x = "";
  let xCount = 0;
  let otherCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (!x) {
      x = s[i];
      xCount++;
      continue;
    }

    if (s[i] === x) xCount++;
    else otherCount++;

    if (xCount === otherCount) {
      answer++;
      x = "";
      xCount = 0;
      otherCount = 0;
    }
  }

  if (x) answer++;
  return answer;
}

const answer = solution(input);
console.log(answer);
