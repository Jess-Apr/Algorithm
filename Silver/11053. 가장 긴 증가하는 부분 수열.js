// 문제 번호: 11053번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = input[0].split(" ").map(Number);

function solution(n, arr) {
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let max = 0;

    for (let j = 0; j <= i; j++) {
      if (arr[j] < arr[i]) {
        max = Math.max(dp[j], max);
      }
    }

    dp[i] = max + 1;
  }

  return Math.max(...dp);
}

console.log(solution(n, arr));
