// 문제 번호: 1085번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

if (input[0] === input[1] && input[1] === input[2]) {
    console.log(input[0] * 1000 + 10000);
} else if (
    input[0] !== input[1] &&
    input[1] !== input[2] &&
    input[0] !== input[2]
) {
    const largest = Math.max(...input);
    console.log(largest * 100);
} else {
    if (input[0] === input[1] || input[0] === input[2]) {
        console.log(input[0] * 100 + 1000);
    } else if (input[1] === input[2]) {
        console.log(input[1] * 100 + 1000);
    }
}
