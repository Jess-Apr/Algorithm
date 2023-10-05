// 문제 번호: 3052번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);

function solution(input) {
  const tmp = [];
  for (let i of input) {
    if (tmp.indexOf(i % 42) === -1) {
      tmp.push(i % 42);
    }
  }
  return tmp.length;
}

console.log(solution(input));
