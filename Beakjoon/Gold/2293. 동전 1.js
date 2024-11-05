// 문제 번호: 2293번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const coins = input.map(Number);

function solution(n, k, coins) {
  const dp = new Array(k + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j <= k; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[k];
}

console.log(solution(n, k, coins));
