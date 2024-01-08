// 문제 번호: 9461번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const testCases = input.map(Number);

function solution(testCase) {
  const len = new Array(testCase).fill(0);
  len[0] = 1;
  len[1] = 1;
  len[2] = 1;
  len[3] = 2;
  len[4] = 2;

  for (let i = 5; i < testCase; i++) {
    len[i] = len[i - 1] + len[i - 5];
  }

  return len[testCase - 1];
}

for (let testCase of testCases) {
  console.log(solution(testCase));
}
