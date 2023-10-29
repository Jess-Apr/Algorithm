// 문제 번호: 2577번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);

function solution(input) {
  const mul = String(input[0] * input[1] * input[2]);
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < mul.length; i++) {
    arr[+mul[i]] += 1;
  }
  return arr.join("\n");
}

console.log(solution(input));
