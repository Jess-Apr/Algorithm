// 문제 번호: 34183번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let [N, M, A, B] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const required = N * 3;

if (required <= M) {
    console.log(0);
} else {
    const price = (required - M) * A + B;
    console.log(price);
}
