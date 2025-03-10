// 문제 번호: 1037번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const submultiples = input[1].split(" ").map(Number);
submultiples.sort((a, b) => a - b);

const len = submultiples.length;
const number = submultiples[0] * submultiples[len - 1];

console.log(number);
