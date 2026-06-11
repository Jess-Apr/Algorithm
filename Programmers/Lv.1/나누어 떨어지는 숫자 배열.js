const input = require("./example");

function solution(arr, divisor) {
  const answer = arr.filter((num) => num % divisor === 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

const answer = solution(input[0], input[1]);
console.log(answer);
