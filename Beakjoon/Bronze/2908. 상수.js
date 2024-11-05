// 문제 번호: 2908번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  let num1 = +input[0].split("").reverse().join("");
  let num2 = +input[1].split("").reverse().join("");
  return Math.max(num1, num2);
}

console.log(solution(input));
