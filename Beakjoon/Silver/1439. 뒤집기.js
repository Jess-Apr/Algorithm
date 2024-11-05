// 문제 번호: 1439번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const arr = input.split("");
  let zero = 0;
  let one = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] || i === arr.length - 1) {
      arr[i] === "1" ? one++ : zero++;
    } else {
      continue;
    }
  }

  return Math.min(+zero, +one);
}

console.log(solution(input));
