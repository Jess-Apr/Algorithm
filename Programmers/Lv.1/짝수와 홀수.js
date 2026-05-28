const input = require("./example");

function solution(num) {
  if (num % 2 === 0) return "Even";
  else return "Odd";
}

const answer = solution(input);
console.log(answer);
