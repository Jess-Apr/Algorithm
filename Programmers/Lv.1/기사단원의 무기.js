const input = require("./example");

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let divisorCount = 0;

    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) divisorCount += i / j === j ? 1 : 2;
    }

    answer += divisorCount > limit ? power : divisorCount;
  }

  return answer;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
