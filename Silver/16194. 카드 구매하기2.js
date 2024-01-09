// 문제 번호: 16194번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const price = input[0].split(" ").map(Number);

function solution(n, price) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j] + price[j - 1]);
    }
  }

  return dp[n];
}

console.log(solution(n, price));
