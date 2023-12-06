// 문제 번호: 2441번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const num = +input;

function solution(num) {
  const answer = [];

  for (let i = num; i > 0; i--) {
    let str = "";
    for (let j = num; j > 0; j--) {
      if (j <= i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }

  return answer.join("\n");
}

console.log(solution(num));
