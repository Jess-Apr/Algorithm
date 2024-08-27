// 문제 번호: 2440번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString();

const number = Number(input);
let answer = "";
for (i = number; i > 0; i--) {
    for (j = 0; j < i; j++) {
        answer += "*";
    }

    if (i !== 1) answer += "\n";
}
console.log(answer);
