// 문제 번호: 1145번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const smallest = Math.min(...input);
let count = 0;
let answer = smallest;
while (count < 3) {
    count = 0;
    input.forEach((num) => {
        if (answer % num === 0) count++;
    });

    if (count >= 3) break;
    else answer++;
}

console.log(answer);
