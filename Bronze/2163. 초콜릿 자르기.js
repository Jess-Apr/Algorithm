// 문제 번호: 2163번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [n, m] = input.map(Number);

function solution(n, m) {
  return n * m - 1;
}

console.log(solution(n, m));
