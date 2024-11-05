// 문제 번호: 1676번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input)

let five = 5
let answer = 0

while (five <= n) {
    answer += Math.floor(n / five)
    five *= 5
}

console.log(answer)