// 문제 번호: 1181번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const words = input.slice(1);

function solution(words) {
  const arr = [...new Set(words)];

  arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length === b.length) {
      if (a > b) {
        return 1;
      } else if (a === b) {
        return 0;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });

  return arr.join("\n");
}

console.log(solution(words));
