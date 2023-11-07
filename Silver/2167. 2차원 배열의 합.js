// 문제 번호: 2167번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift().split(" ")[0];
const arr = input.splice(0, n).map((el) => el.split(" ").map(Number));
input.shift();
const testCases = input.slice().map((el) => el.split(" ").map(Number));

function solution(testCase) {
  const [i, j, x, y] = [...testCase];
  let sum = 0;

  for (let k = i - 1; k < x; k++) {
    for (let l = j - 1; l < y; l++) {
      sum += arr[k][l];
    }
  }

  return sum;
}

for (let i of testCases) {
  console.log(solution(i));
}
