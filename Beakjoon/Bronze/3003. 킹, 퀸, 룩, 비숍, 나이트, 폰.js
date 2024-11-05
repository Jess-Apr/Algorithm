// 문제 번호: 2338번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const chess = input.map(Number);

function solution(chess) {
  const set = [1, 1, 2, 2, 2, 8];

  for (let i = 0; i < 6; i++) {
    set[i] = set[i] - chess[i];
  }

  return set.join(" ");
}

console.log(solution(chess));
