// 문제 번호: 11727번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);

function solution(n) {
  const answer = new Array(n).fill(0);
  answer[0] = 1;
  answer[1] = 3;

  for (let i = 2; i < n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2] * 2) % 10007;
  }

  return answer[n - 1];
}

console.log(solution(n));
