const input = require("./example");

function solution(dartResult) {
  const answer = [];
  const numbers = dartResult.split(/\D+/).filter(Boolean).map(Number);
  const rules = dartResult.split(/\d+/).filter(Boolean);

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const rule = rules[i];

    const pow = rule[0] === "S" ? 1 : rule[0] === "D" ? 2 : 3;
    const sign = rule[1] === "#" ? -1 : 1;
    let score = num ** pow * sign;

    if (rule[1] === "*") {
      score *= 2;
      if (answer.length) answer[answer.length - 1] *= 2;
    }

    answer.push(score);
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
}

const answer = solution(input);
console.log(answer);
