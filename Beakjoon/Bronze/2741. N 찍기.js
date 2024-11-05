// 문제 번호: 2741번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const num = +input;

function solution(num) {
  const answer = [];
  for (let i = 1; i <= num; i++) {
    answer.push(i);
  }
  return answer.join("\n");
}

console.log(solution(num));
