// 문제 번호: 2753번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = +input;

function solution(input) {
  if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) return 1;

  return 0;
}

console.log(solution(input));
