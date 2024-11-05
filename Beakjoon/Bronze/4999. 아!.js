// 문제 번호: 4999번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

if (input[0].length < input[1].length) console.log("no");
else console.log("go");
