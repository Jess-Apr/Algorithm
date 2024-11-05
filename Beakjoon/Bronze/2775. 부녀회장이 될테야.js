// 문제 번호: 2775번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);
input.shift();

function solution(k, n) {
  const arr = Array.from(Array(k + 1), () => Array(n).fill(0));
  arr[0] = arr[0].map((el, idx) => idx + 1);

  for (let i = 1; i < arr.length; i++) {
    let cur = 1;
    for (let j = 0; j < arr[i].length; j++) {
      if (j !== 0) cur = cur + arr[i - 1][j];
      arr[i][j] = cur;
    }
  }

  return arr[k][n - 1];
}

for (let i = 0; i < input.length; i += 2) {
  console.log(solution(input[i], input[i + 1]));
}
