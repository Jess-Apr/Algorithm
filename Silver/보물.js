// 문제 번호: 2839번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const [a, b] = input.map((el) => el.split(" ").map((n) => +n));

function solution(a, b) {
  const copyA = a.slice();
  const copyB = b.slice();
  copyA.sort((a, b) => a - b).reverse();
  copyB.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    const idx = copyB.indexOf(b[i]);
    a[i] = copyA[idx];
    copyB[idx] = null;
  }

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

console.log(solution(a, b));
