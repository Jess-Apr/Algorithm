// 문제 번호: 2839번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = +input;

function solution(n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = -1;
  dp[1] = -1;
  dp[2] = -1;
  dp[3] = 1;
  dp[4] = -1;
  dp[5] = 1;

  for (let i = 6; i <= n; i++) {
    if (dp[i - 3] === -1 && dp[i - 5] === -1) {
      dp[i] = -1;
    } else if (dp[i - 3] === -1 || dp[i - 5] === -1) {
      dp[i - 3] === -1 ? (dp[i] = dp[i - 5] + 1) : (dp[i] = dp[i - 3] + 1);
    } else {
      dp[i] = Math.min(dp[i - 3] + 1, dp[i - 5] + 1);
    }
  }

  return dp[n];
}

console.log(solution(n));
