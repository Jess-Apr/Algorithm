const input = require("./example");

function solution(array, commands) {
  const answer = [];

  for (const [i, j, k] of commands) {
    const sortedArr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(sortedArr[k - 1]);
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
