// 문제 번호: 11758번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [m, n, o] = input.map((el) => el.split(" ").map(Number));

function solution(m, n, o) {
  const num1 = m[0] * n[1] + n[0] * o[1] + o[0] * m[1];
  const num2 = m[1] * n[0] + n[1] * o[0] + o[1] * m[0];

  return num1 > num2 ? 1 : num1 < num2 ? -1 : 0;
}

console.log(solution(m, n, o));
