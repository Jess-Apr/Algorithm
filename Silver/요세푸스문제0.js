// 문제 번호: 11866번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);
[n, k] = input;

function solution(n, k) {
  let arr = Array(n)
    .fill()
    .map((_, idx) => idx + 1);
  const result = [];
  let idx = k - 1;

  for (let i = 0; i < n; i++) {
    result.push(...arr.splice(idx, 1));

    if (idx + (k - 1) > arr.length - 1) {
      idx = idx + (k - 1) - arr.length;
      if (idx > arr.length - 1) {
        idx = idx % arr.length;
      }
    } else {
      idx += k - 1;
    }
  }

  return `<${result.join(", ")}>`;
}

console.log(solution(n, k));
