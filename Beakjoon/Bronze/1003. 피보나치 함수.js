// 문제 번호: 1003번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [_, ...testcases] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = [];
dp[0] = [1, 0];
dp[1] = [0, 1];

const max = Math.max(...testcases);

for (let i = 2; i <= max; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

for (let t of testcases) {
  console.log(dp[t].join(" "));
}
