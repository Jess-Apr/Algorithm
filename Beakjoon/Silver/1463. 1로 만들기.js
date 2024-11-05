// 문제 번호: 1463번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);

function solution(n) {
  const answer = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      const min = Math.min(answer[i / 2], answer[i / 3], answer[i - 1]);
      answer[i] = 1 + min;
    } else if (i % 2 === 0) {
      const min = Math.min(answer[i / 2], answer[i - 1]);
      answer[i] = 1 + min;
    } else if (i % 3 === 0) {
      const min = Math.min(answer[i / 3], answer[i - 1]);
      answer[i] = 1 + min;
    } else {
      answer[i] = 1 + answer[i - 1];
    }
  }

  return answer[n];
}

console.log(solution(n));
