const input = require("./example");

function solution(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join(""),
  );
}

const answer = solution(input);
console.log(answer);
