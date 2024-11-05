// 문제 번호: 1152번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  return input.length ? input.trim().split(" ").length : 0;
}

console.log(solution(input));
