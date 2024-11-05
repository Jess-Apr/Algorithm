// 문제 번호: 8958번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

function solution(str) {
  let score = 0;
  let tmp = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "O") {
      tmp += 1;
      score += tmp;
    } else {
      tmp = 0;
    }
  }

  return score;
}

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
