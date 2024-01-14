// 문제 번호: 9465번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = +input.shift();

function solution(n, testCase) {
  const dp = Array.from({ length: n }, () => Array(3).fill(0));
  dp[0] = [0, testCase[0][0], testCase[1][0]];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(...dp[i - 1]);
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2]) + testCase[0][i];
    dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1]) + testCase[1][i];
  }

  return Math.max(...dp[n - 1]);
}

for (let i = 0; i < t; i++) {
  const n = +input.shift();
  const testCase = [];
  testCase.push(...input.splice(0, 2).map((el) => el.split(" ").map(Number)));

  console.log(solution(n, testCase));
}
