// 문제 번호: 10799번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let layer = 0;
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" && input[i + 1] === "(") {
      result++;
      layer++;
    } else if (input[i] === "(" && input[i + 1] === ")") {
      continue;
    } else if (input[i] === ")" && input[i + 1] === ")") {
      result++;
      layer--;
    } else if (input[i] === ")" && input[i + 1] === "(") {
      result += layer;
    }
  }

  return result;
}

console.log(solution(input));
