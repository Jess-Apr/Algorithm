const input = require("./example");

function solution(s) {
  const letterIdx = {};
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    const letter = letterIdx[s[i]];
    if (letter !== undefined) answer.push(i - letter);
    else answer.push(-1);

    letterIdx[s[i]] = i;
  }

  return answer;
}

const answer = solution(input);
console.log(answer);
