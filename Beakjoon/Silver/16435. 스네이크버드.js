// 문제 번호: 16435번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const len = input.shift().split(" ").map(Number)[1];
const fruit = input[0].split(" ").map(Number);

function solution(len, fruit) {
  fruit.sort((a, b) => a - b);
  let curLen = len;

  for (let i of fruit) {
    if (i <= curLen) {
      curLen++;
    } else {
      break;
    }
  }

  return curLen;
}

console.log(solution(len, fruit));
