// 문제 번호: 11718번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.forEach((_, i) => {
  console.log(input[i]);
});
