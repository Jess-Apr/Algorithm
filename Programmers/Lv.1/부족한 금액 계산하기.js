const input = require("./example");

function solution(price, money, count) {
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  return sum <= money ? 0 : sum - money;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
