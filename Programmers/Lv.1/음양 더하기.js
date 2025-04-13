const input = require("./example");

function solution(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) sum += absolutes[i];
    else sum -= absolutes[i];
  }

  return sum;
}

const answer = solution(input[0], input[1]);
console.log(answer);
