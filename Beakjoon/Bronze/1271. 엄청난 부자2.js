// 문제 번호: 1271번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [n, m] = input.map(BigInt);

function solution(n, m) {
  const answerN = n / m;
  const answerM = n % m;
  return [answerN, answerM].join("\n");
}

console.log(solution(n, m));
