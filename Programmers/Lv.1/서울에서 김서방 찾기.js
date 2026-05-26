const input = require("./example");

function solution(seoul) {
  const len = seoul.length;

  for (let i = 0; i < len; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

const answer = solution(input);
console.log(answer);
