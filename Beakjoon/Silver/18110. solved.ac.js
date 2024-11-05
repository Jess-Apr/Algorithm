// 문제 번호: 18110번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [n, ...op] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (op.length === 0) {
  console.log(0);
  return;
}

// 계수 정렬을 사용한 풀이 방식
const arr = new Array(31).fill(0);
for (let num of op) {
  arr[num]++;
}

let trimCount = Math.round(n * 0.15);
for (let i = 1; i <= 30; i++) {
  const subCount = Math.min(arr[i], trimCount);
  arr[i] -= subCount;
  trimCount -= subCount;

  if (trimCount === 0) break;
}

trimCount = Math.round(n * 0.15);
for (let i = 30; i >= 1; i--) {
  const subCount = Math.min(arr[i], trimCount);
  arr[i] -= subCount;
  trimCount -= subCount;

  if (trimCount === 0) break;
}

let sum = 0;
let cnt = 0;
for (let i = 1; i <= 30; i++) {
  const c = arr[i];

  if (c > 0) {
    sum += c * i;
    cnt += c;
  }
}

const avg = Math.round(sum / cnt);
console.log(avg);

// 직접 푼 풀이 방식 (JS sort() 사용)
// op.sort((a, b) => a - b);

// const trimCount = Math.round(n * 0.15);

// let sum = 0;
// for (let i = trimCount; i < n - trimCount; i++) {
//   sum += op[i];
// }

// const len = n - 2 * trimCount;
// const avg = Math.round(sum / len);

// console.log(avg);
