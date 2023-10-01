// 문제 번호: 1874번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = Number(input.shift());
let arr = input.map((el) => +el);

function solution(num, arr) {
  arr.reverse();
  return arr;
}

console.log(solution(num, arr));
