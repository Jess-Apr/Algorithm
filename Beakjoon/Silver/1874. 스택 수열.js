// 문제 번호: 1874번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const [n, ...arr] = input;

const stack = [];
let answer = [];
let next = 1;

for (let i = 0; i < n; i++) {
  const x = arr[i];

  while (next <= x) {
    stack.push(next);
    next++;
    answer.push("+");
  }

  if (stack[stack.length - 1] === x) {
    stack.pop();
    answer.push("-");
  } else {
    console.log("NO");
    return;
  }
}

console.log(answer.join("\n"));
