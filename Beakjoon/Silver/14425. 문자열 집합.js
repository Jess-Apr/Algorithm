// 문제 번호: 14425번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const nums = input[0].split(" ").map(Number);
const n = input.slice(1, 1 + nums[0]);
const m = input.slice(1 + nums[0]);

function solution(n, m) {
  let obj = {};
  let count = 0;

  for (let i of n) {
    obj[i] = (obj[i] || 0) + 1;
  }

  for (let j of m) {
    if (obj[j]) count++;
  }

  return count;
}

console.log(solution(n, m));
