// 문제 번호: 1094번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = Number(input);

function solution(input) {
  let stick = 64;
  const arr = [64];

  while (arr.reduce((acc, cur) => acc + cur) > input) {
    arr.pop();
    stick = stick / 2;
    arr.push(stick);
    if (arr.reduce((acc, cur) => acc + cur) >= input) {
      continue;
    } else {
      arr.push(stick);
    }
  }

  return arr.length;
}

console.log(solution(input));
