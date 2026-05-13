const input = require("./example");

function solution(num) {
  let count = 0;
  let curNum = num;

  while (curNum !== 1 && count < 500) {
    curNum % 2 === 0 ? (curNum /= 2) : (curNum = curNum * 3 + 1);
    count++;

    if (curNum == 1) break;
  }

  return curNum === 1 ? count : -1;
}

const answer = solution(input);
console.log(answer);
