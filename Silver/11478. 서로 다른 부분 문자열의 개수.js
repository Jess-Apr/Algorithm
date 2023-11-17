// 문제 번호: 11478번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const obj = {};

  for (let i = 1; i <= input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (j + i > input.length) break;

      const str = input.slice(j, j + i);
      if (!obj[str]) obj[str] = 1;
      else continue;
    }
  }

  return Object.keys(obj).length;
}

console.log(solution(input));
