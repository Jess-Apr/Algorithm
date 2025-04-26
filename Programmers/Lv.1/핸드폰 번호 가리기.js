const input = require("./example");

function solution(phone_number) {
  return phone_number.replace(/.(?=.{4})/g, "*");
}

const answer = solution(input);
console.log(answer);
