// 문제 번호: 1085번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [x, y, w, h] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const smallest = Math.min(x, y, w - x, h - y);
console.log(smallest);
