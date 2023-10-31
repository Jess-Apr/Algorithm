// 문제 번호: 2751번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const numbers = input.slice(1).map(Number);

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers.join("\n");
}

console.log(solution(numbers));
