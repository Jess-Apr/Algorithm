// 문제 번호: 1269번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const a = input[0].split(" ");
const b = input[1].split(" ");

function solution(a, b) {
  let count = 0;
  let setA = new Set(a);
  let setB = new Set(b);

  a.forEach((el) => !setB.has(el) && count++);
  b.forEach((el) => !setA.has(el) && count++);

  return count;
}

console.log(solution(a, b));
