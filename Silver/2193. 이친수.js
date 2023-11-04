// 문제 번호: 1431번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const number = +input;

function solution(number) {
  const arr = [1, 1];

  for (let i = 2; i < number; i++) {
    arr[i] = BigInt(arr[i - 2]) + BigInt(arr[i - 1]);
  }

  return String(arr[number - 1]);
}

console.log(solution(number));
