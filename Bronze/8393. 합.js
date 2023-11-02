// 문제 번호: 8393번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const number = Number(input);

function solution(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(number));
