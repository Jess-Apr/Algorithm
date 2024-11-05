// 문제 번호: 28454번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const curDate = new Date(input[0]);
const n = Number(input[1]);
const gifticons = input.slice(2);
let answer = 0;

for (gifticon of gifticons) {
    const expireDate = new Date(gifticon);
    if (curDate <= expireDate) answer++;
}

console.log(answer);
