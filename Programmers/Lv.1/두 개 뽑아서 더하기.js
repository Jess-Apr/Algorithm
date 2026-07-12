const input = require("./example");

function solution(numbers) {
  const len = numbers.length;
  const answer = new Set();

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }

  return [...answer].sort((a, b) => a - b);
}

const answer = solution(input);
console.log(answer);
