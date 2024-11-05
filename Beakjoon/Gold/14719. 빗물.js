// 문제 번호: 14719번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const blocks = input[1].split(" ").map(Number);

let answer = 0;

for (let i = 1; i < blocks.length; i++) {
  let left = -1;
  let right = -1;
  let min = 0;
  let result = 0;

  for (let j = i; j >= 0; j--) {
    left = Math.max(left, blocks[j]);
  }

  for (let j = i; j < blocks.length; j++) {
    right = Math.max(right, blocks[j]);
  }

  min = Math.min(left, right);
  result += min - blocks[i];
  answer += result;
}

console.log(answer);
