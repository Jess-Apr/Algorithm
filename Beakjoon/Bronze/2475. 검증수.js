// 문제 번호: 2475번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

function solution(input) {
  let answer = 0;
  for (let i of input) {
    answer += i ** 2;
  }
  return answer % 10;
}

console.log(solution(input));
