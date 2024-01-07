// 문제 번호: 2156번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const wines = input.slice().map(Number);

function solution(wines) {
  if (wines.length === 1) return wines[0];
  if (wines.length === 2) return wines[0] + wines[1];

  const dp = new Array(n + 1).fill(0);
  dp[1] = wines[0];
  dp[2] = wines[0] + wines[1];

  // 와인은 연속으로 세잔을 마실 수 없으므로 세가지 선택지가 있다.
  // 1. n - 3번째 잔을 마시고 n - 1번째 잔과, n번째 잔을 마시는 것 (n - 2번째 잔을 거름)
  // 2. n - 2번째 잔을 마시고 n번째 잔을 마시는 것 (n - 1번째 잔을 거름)
  // 3. n - 2번째 잔과 n - 1번째 잔을 마시는 것 (n번째 잔을 거름)
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 3] + wines[i - 2] + wines[i - 1], dp[i - 2] + wines[i - 1], dp[i - 1]);
  }

  return dp[n];
}

console.log(solution(wines));
