// 문제 번호: 1436번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = +input;

function solution(input) {
  let series = 1;
  let num = 666;

  while (series < input) {
    num++;
    if (String(num).includes("666")) series++;
  }

  return num;
}

console.log(solution(input));
