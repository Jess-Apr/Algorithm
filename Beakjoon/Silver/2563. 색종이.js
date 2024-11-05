// 문제 번호: 2563번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const paperCount = +input.shift();
const paperPosition = input.map((paper) => paper.split(" ").map(Number));
const backgroundPaper = Array.from(Array(100), () => Array(100).fill(0));

let blackArea = 0;
for (let i = 0; i < paperCount; i++) {
    for (let j = paperPosition[i][0]; j < paperPosition[i][0] + 10; j++) {
        for (let k = paperPosition[i][1]; k < paperPosition[i][1] + 10; k++) {
            if (!backgroundPaper[j][k]) {
                blackArea++;
                backgroundPaper[j][k] = 1;
            }
        }
    }
}

console.log(blackArea);
