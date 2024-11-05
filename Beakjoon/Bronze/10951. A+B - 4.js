// 문제 번호: 10951번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((n) => +n));

function solution(input) {
  const answer = [];

  for (let i = 0; i < input.length; i++) {
    answer.push(input[i][0] + input[i][1]);
  }

  return answer.join("\n");
}

console.log(solution(input));
