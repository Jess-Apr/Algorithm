// 문제 번호: 9086번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();

for (let i = 0; i < n; i++) {
  console.log(`${input[i][0]}${input[i][input[i].length - 1]}`);
}
