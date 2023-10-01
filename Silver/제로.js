// 문제 번호: 10773번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);
input.shift();

function solution(input) {
  const arr = [];

  for (let i of input) {
    i ? arr.push(i) : arr.pop();
  }

  let answer = 0;
  if (arr.length) answer = arr.reduce((acc, cur) => acc + cur);

  return answer;
}

console.log(solution(input));
