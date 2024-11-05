// 문제 번호: 1158번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [n, k] = input.map(Number);

function solution(n, k) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const answer = [];
  let cur = 0;

  for (let i = 0; i < n; i++) {
    if (cur + k - 1 < arr.length) {
      cur += k - 1;
    } else {
      cur = (cur + (k - 1)) % arr.length;
    }
    answer.push(...arr.splice(cur, 1));
  }

  return `<${answer.join(", ")}>`;
}

console.log(solution(n, k));
