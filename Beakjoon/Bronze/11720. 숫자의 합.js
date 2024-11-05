// 문제 번호: 11720번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const num = input[0].split("").map((n) => +n);

function solution(num) {
  let answer = 0;
  for (let i of num) {
    answer += i;
  }
  return answer;
}

console.log(solution(num));
