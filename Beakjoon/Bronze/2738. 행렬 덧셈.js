// 문제 번호: 2338번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const a = input.splice(0, n).map((el) => el.split(" ").map(Number));
const b = input.splice(0, n).map((el) => el.split(" ").map(Number));

const answer = Array.from({ length: n }, () => new Array(m).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answer[i][j] = a[i][j] + b[i][j];
  }
}

console.log(answer.map((el) => el.join(" ")).join("\n"));
