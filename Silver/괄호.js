// 문제 번호: 9012번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

function solution(parenthesis) {
  const stack = [];

  for (let i of parenthesis) {
    if (i === "(") {
      stack.push(i);
    } else {
      if (stack.length) stack.pop();
      else return "NO";
    }
  }

  return stack.length ? "NO" : "YES";
}

for (let i of input) {
  console.log(solution(i));
}
