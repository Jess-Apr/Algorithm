// 문제 번호: 2558번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);
const [n, m] = input;

function solution(n, m) {
  return n + m;
}

console.log(solution(n, m));
