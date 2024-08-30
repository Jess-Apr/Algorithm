// 문제 번호: 4562번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const testCases = input.map((it) => it.split(" ").map(Number));

for (let i = 0; i < testCases.length; i++) {
    if (testCases[i][0] < testCases[i][1]) {
        console.log("NO BRAINS");
    } else {
        console.log("MMM BRAINS");
    }
}
