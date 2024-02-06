// 문제 번호: 11726번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = +fs.readFileSync(filePath).toString().trim();

const answer = [];
answer.push(1 % 10007);
answer.push(2 % 10007);

for (let i = 2; i < input; i++) {
  answer.push((answer[i - 1] + answer[i - 2]) % 10007);
}

console.log(answer[input - 1]);
