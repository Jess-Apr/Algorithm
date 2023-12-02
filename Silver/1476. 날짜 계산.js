// 문제 번호: 1476번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
const num = input.split(" ").map((n) => +n);

function solution(num) {
  const [a, b, c] = num;
  let count = 1;

  while (true) {
    if ((count - a) % 15 === 0 && (count - b) % 28 === 0 && (count - c) % 19 === 0) {
      break;
    } else {
      count++;
    }
  }

  return count;
}

console.log(solution(num));
