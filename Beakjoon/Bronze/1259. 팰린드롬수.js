// 문제 번호: 1259번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

function solution(input) {
  const result = [];
  for (let i of input) {
    let tmp = i.split("").reverse().join("");
    let answer = "yes";
    for (let j = 0; j < i.length; j++) {
      if (i[j] !== tmp[j]) {
        answer = "no";
        break;
      }
    }
    result.push(answer);
  }
  return result.join("\n");
}

console.log(solution(input));
