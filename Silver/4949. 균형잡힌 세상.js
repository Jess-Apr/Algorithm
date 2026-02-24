// 문제 번호: 4949번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let string of input) {
  if (string === ".") break;

  let answer = "yes";
  const stack = [];

  for (let str of string) {
    if (str === "(" || str === "[") {
      stack.push(str);
    } else if (str === ")") {
      if (!stack.length || stack.pop() !== "(") {
        answer = "no";
        break;
      }
    } else if (str === "]") {
      if (!stack.length || stack.pop() !== "[") {
        answer = "no";
        break;
      }
    }
  }

  if (stack.length) answer = "no";
  console.log(answer);
}
