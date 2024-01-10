// 문제 번호: 2338번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = [BigInt(input[0]), BigInt(input[1])];

console.log([a + b, a - b, a * b].join("\n"));
