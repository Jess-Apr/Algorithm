// 문제 번호: 25314번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = +fs.readFileSync(filePath).toString().trim();

const n = input / 4;
const answer = [];
for (let i = 0; i < n; i++) {
  answer.push("long");
}

answer.push("int");
console.log(answer.join(" "));
