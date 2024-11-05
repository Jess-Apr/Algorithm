// 문제 번호: 3046번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const r2 = input[1] * 2 - input[0];
console.log(r2);
