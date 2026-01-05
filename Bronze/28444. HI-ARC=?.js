// 문제 번호: 28444번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const first = input[0] * input[1];
const second = input[2] * input[3] * input[4];

console.log(first - second);
