// 문제 번호: 2588번

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
  const [h, t, o] = String(input[1])
    .split("")
    .map((n) => +n);

  return [input[0] * o, input[0] * t, input[0] * h, input[0] * input[1]].join("\n");
}

console.log(solution(input));
