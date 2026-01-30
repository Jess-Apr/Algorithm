// 문제 번호: 11908번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const cards = input[1].split(" ").map(Number);
const max = Math.max(...cards);

const answer = cards.reduce((acc, cur) => acc + cur, 0) - max;
console.log(answer);
