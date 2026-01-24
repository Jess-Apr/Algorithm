// 문제 번호: 20499번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [k, d, a] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("/")
    .map(Number);

if (k + a < d || d === 0) {
    console.log("hasu");
} else {
    console.log("gosu");
}
