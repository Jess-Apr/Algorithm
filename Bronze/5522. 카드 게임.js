// 문제 번호: 5522번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

console.log(input.reduce((acc, cur) => acc + cur));
