// 문제 번호: 11931번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
input.shift();

function solution(input) {
  input.sort((a, b) => b - a);
  return input.join("\n");
}

console.log(solution(input));
