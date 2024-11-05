// 문제 번호: 1018번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const board = input.shift().split(" ").map(Number);

function solution(board, input) {
  const [h, w] = board;
  const chess = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];
  const answer = [];

  for (let i = 0; i < h - 7; i++) {
    for (let j = 0; j < w - 7; j++) {
      let count = 0;
      for (let k = i; k <= i + 7; k++) {
        for (let m = j; m <= j + 7; m++) {
          if (chess[k - i][m - j] !== input[k][m]) {
            count++;
          }
        }
      }
      answer.push(Math.min(count, 64 - count));
    }
  }

  return Math.min(...answer);
}

console.log(solution(board, input));
