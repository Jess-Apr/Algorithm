// 문제 번호: 10844번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const num = +input;

const dp = Array.from({ length: num + 1 }, () => new Array(10));
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

for (let n = 3; n <= num; n++) {
  for (let i = 0; i < 10; i++) {
    if (i === 0) {
      dp[n][i] = dp[n - 1][i + 1] % 1000000000;
    } else if (i >= 1 && i <= 8) {
      dp[n][i] = (dp[n - 1][i - 1] + dp[n - 1][i + 1]) % 1000000000;
    } else if (i === 9) {
      dp[n][i] = dp[n - 1][i - 1] % 1000000000;
    }
  }
}

let sum = dp[num].reduce((acc, cur) => acc + cur);
console.log(sum % 1000000000);
