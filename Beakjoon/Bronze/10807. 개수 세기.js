// 문제 번호: 10807번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const arr = input[1].split(" ").map(Number);
const v = +input[2];

let answer = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] === v) answer++;
}
console.log(answer);
