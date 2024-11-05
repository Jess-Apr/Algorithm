// 문제 번호: 1247번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().split(`\n`);

let idx = 0;
let testCount = 0;
let sum = BigInt(0);
const answer = [];

while (idx < input.length) {
    if (!testCount) {
        testCount = input[idx];
        idx++;
        continue;
    }

    sum += BigInt(input[idx]);

    testCount--;
    if (!testCount) {
        const symbol = sum > 0 ? "+" : sum < 0 ? "-" : "0";
        answer.push(symbol);
        sum = BigInt(0);
    }

    idx++;
}

console.log(answer.join("\n"));
