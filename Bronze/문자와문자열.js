// 문제 번호: 27866번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [str, num] = [input[0], +input[1]];

function solution(str, num) {
  return str[num - 1];
}

console.log(solution(str, num));
