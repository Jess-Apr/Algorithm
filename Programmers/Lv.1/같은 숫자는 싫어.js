const input = require("./example");

function solution(arr) {
  const answer = [arr[0]];
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

const answer = solution(input);
console.log(answer);
