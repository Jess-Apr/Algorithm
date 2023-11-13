// 문제 번호: 1541번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let eq = input.split("-").map((el) => el.split("+"));
  for (let i = 0; i < eq.length; i++) {
    eq[i] = eq[i].map((n) => +n);
  }

  eq = eq.map((el) => el.reduce((acc, cur) => acc + cur));

  return eq.reduce((acc, cur) => acc - cur);
}

console.log(solution(input));
