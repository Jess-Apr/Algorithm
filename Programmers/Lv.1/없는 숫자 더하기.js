const input = require("./example");

function solution(numbers) {
  let sum = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) sum += i;
  }

  return sum;
}

const answer = solution(input);
console.log(answer);
