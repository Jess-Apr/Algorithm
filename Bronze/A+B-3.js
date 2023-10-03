// 문제 번호: 10950번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = input.map((el) => el.split(" ").map((n) => +n));

function solution(n, m) {
  console.log(n + m);
}

for (let i of input) {
  solution(...i);
}
