// 문제 번호: 30804번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ");

if (n === 1 || n === 2) {
  console.log(n);
  process.exit(0);
}

let left = 0;
let answer = 0;
let kind = 0;
const curFruits = {};

for (let right = 0; right < n; right++) {
  if ((curFruits[arr[right]] ?? 0) === 0) kind++;
  curFruits[arr[right]] = (curFruits[arr[right]] ?? 0) + 1;

  while (kind > 2) {
    curFruits[arr[left]]--;
    if (curFruits[arr[left]] === 0) kind--;
    left++;
  }

  answer = Math.max(answer, right - left + 1);
}

console.log(answer);
