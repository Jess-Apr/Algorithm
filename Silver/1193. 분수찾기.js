// 문제 번호: 1193번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const number = +input;

function solution(number) {
  let rest = number;
  let count = 1;
  let denominator;
  let numerator;

  while (rest > count) {
    rest = rest - count;
    count++;
  }

  if (count % 2) {
    denominator = 1;
    numerator = count;
  } else {
    denominator = count;
    numerator = 1;
  }

  while (rest - 1 > 0) {
    if (count % 2) {
      denominator++;
      numerator--;
    } else {
      denominator--;
      numerator++;
    }

    rest--;
  }

  return `${numerator}/${denominator}`;
}

console.log(solution(number));
