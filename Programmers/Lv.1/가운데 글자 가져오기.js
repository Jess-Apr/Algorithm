const input = require("./example");

function solution(s) {
  const middle = Math.round(s.length / 2) - 1;
  return s.length % 2 ? s[middle] : s[middle] + s[middle + 1];
}

const answer = solution(input);
console.log(answer);
