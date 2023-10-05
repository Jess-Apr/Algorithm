// 문제 번호: 2439번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const num = +input;

function solution(num, cur) {
  const answer = [];
  for (let i = 1; i <= num; i++) {
    if (i <= cur) {
      answer.push("*");
    } else {
      answer.push(" ");
    }
  }

  return answer.reverse().join("");
}

for (let i = 1; i <= num; i++) {
  console.log(solution(num, i));
}
