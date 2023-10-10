// 문제 번호: 1427번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let num = input.split("").map((n) => +n);
  num.sort((a, b) => b - a);
  return num.join("");
}

console.log(solution(input));
