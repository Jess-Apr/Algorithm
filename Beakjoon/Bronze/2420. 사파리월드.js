// 문제 번호: 2420번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(Math.abs(a - b));
