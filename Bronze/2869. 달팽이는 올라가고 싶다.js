// 문제 번호: 2869번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [a, b, v] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const days = Math.ceil((v - a) / (a - b)) + 1;

console.log(days);
