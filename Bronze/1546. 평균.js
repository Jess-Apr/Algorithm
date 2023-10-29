// 문제 번호: 1546번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = input.map((el) => el.split(" ").map((n) => +n))[0];

function solution(input) {
  const highest = Math.max(...input);
  const newScore = input.map((score) => (score / highest) * 100);

  return newScore.reduce((acc, cur) => acc + cur) / newScore.length;
}

console.log(solution(input));
