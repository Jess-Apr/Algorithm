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

// 예시 (4장)
// 1장: 1
// 2장: 1 + 1, 2
// 3장: 2 + 1 (앞에서 계산한 2장 값 중 최소값 + 1장 카드팩 가격), 1 + 2 (카드 1장 값 + 2장 카드팩 가격), 3
// 4장: 3 + 1 (앞에서 계산한 3장 값 중 최소값 + 1장 카드팩 가격), 2 + 2 (앞에서 계산한 2장 값 중 최소값 + 2장 카드팩 가격), 1 + 3 (카드 1장 값 + 3장 카드팩 가격), 4
