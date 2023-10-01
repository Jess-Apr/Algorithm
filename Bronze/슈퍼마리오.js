// 문제 번호: 2851

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

function solution(input) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (Math.abs(100 - sum) > Math.abs(100 - (sum + input[i]))) {
      sum += input[i];
    } else if (Math.abs(100 - sum) === Math.abs(100 - (sum + input[i]))) {
      sum += input[i];
      return sum;
    } else {
      return sum;
    }
  }

  return sum;
}
console.log(solution(input));
