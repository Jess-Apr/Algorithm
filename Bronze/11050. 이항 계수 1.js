// 문제 번호: 11050번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);
const [n, k] = input;

function factorial(num) {
  let mul = 1;
  for (let i = 1; i <= num; i++) {
    mul = mul * i;
  }
  return mul;
}

console.log(factorial(n) / (factorial(n - k) * factorial(k)));
