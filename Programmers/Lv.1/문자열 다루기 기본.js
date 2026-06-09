const input = require("./example");

function solution(s) {
  const regEx = /^(\d{4}|\d{6})$/;
  return regEx.test(s);
}

const answer = solution(input);
console.log(answer);
