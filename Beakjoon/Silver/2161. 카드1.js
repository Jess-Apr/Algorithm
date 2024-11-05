// 문제 번호: 2161번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const num = +input;

const cards = [];
for (let i = 1; i <= num; i++) {
    cards.push(i);
}

const answer = [];
let head = 0;
while (cards.length - head > 2) {
    answer.push(cards[head]);
    head++;
    cards.push(cards[head]);
    head++;
}

answer.push(cards[head]);
answer.push(cards[head + 1]);
console.log(answer.join(" "));
