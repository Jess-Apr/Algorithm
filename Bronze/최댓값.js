// 문제 번호: 2562번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);

function solution(input) {
  const answer = [Math.max(...input), input.indexOf(Math.max(...input)) + 1];
  return answer.join("\n");
}

console.log(solution(input));
