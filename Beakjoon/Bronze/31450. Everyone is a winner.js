// 문제 번호: 31450번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [first, second] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

if (first % second) {
    console.log("No");
} else {
    console.log("Yes");
}
