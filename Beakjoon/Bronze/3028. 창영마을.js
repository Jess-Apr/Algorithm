// 문제 번호: 3028번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();

let ball = 1;

function swap(k, ball, fallback) {
    if (ball === fallback) {
        return fallback;
    }

    return k - ball;
}

for (let i of input) {
    if (i === "A") {
        ball = swap(3, ball, 3);
    } else if (i === "B") {
        ball = swap(5, ball, 1);
    } else if (i === "C") {
        ball = swap(4, ball, 2);
    }
}

console.log(ball);
