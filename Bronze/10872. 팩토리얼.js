// 문제 번호: 10872번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = +fs.readFileSync(filePath).toString().trim();

let answer = 1;

for (let i = input; i > 0; i--) {
  answer *= i;
}

console.log(answer);
