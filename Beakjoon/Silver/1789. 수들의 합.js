// 문제 번호: 1789번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const num = +input;

function solution(num) {
  let sum = 0;
  let cur = 1;
  let count = 0;

  while (sum < num) {
    if (sum + cur > num) break;

    sum += cur;
    count++;
    cur++;
  }

  return count;
}

console.log(solution(num));
