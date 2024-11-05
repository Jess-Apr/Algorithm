// 문제 번호: 18870번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const x = input[1].split(" ").map(Number);

const deduplicated = new Set(x);
const arr = [...deduplicated];
arr.sort((a, b) => a - b);

const compressed = {};

for (let i = 0; i < arr.length; i++) {
  const xVal = arr[i];
  compressed[xVal] = i;
}

const answer = [];
for (const j of x) {
  answer.push(compressed[j]);
}

console.log(answer.join(" "));
