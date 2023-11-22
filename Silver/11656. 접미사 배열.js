// 문제 번호: 11656번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const words = [];

  for (let i = 0; i < input.length; i++) {
    words.push(input.slice(i));
  }

  return words.sort().join("\n");
}

console.log(solution(input));
