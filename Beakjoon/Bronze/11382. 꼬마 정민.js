// 문제 번호: 11382번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [a, b, c] = input.map(Number);

console.log(a + b + c);
