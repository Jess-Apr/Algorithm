const input = require("./example");

function solution(s) {
  let curIdx = 0;
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === " ") {
      answer.push(ch);
      curIdx = 0;
      continue;
    }

    if (curIdx % 2 === 0) {
      answer.push(ch.toUpperCase());
    } else {
      answer.push(ch.toLowerCase());
    }

    curIdx++;
  }

  return answer.join("");
}

const answer = solution(input);
console.log(answer);
