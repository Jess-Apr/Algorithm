// 문제 번호: 2822번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const score = input.map((n) => +n);

function solution(score) {
  const arr = [];
  let finalScore = 0;

  for (let i = 0; i < 5; i++) {
    const max = Math.max(...score);
    const idx = score.indexOf(max);
    finalScore += max;
    arr.push(idx + 1);
    score[idx] = null;
  }

  arr.sort((a, b) => a - b);

  return [finalScore, arr.join(" ")].join("\n");
}

console.log(solution(score));
