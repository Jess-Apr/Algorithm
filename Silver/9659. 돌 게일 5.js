// 문제 번호: 9659번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
const num = +input;

function solution(num) {
  if (num % 2) {
    return "SK";
  } else {
    return "CY";
  }
}

console.log(solution(num));
