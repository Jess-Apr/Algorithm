// 문제 번호: 5300번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);

const answer = [];
for (let i = 1; i <= n; i++) {
    answer.push(i);
    if (!(i % 6) || i === n) {
        answer.push("Go!");
    }
}

console.log(answer.join(" "));
