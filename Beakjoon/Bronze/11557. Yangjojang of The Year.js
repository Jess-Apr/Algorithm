// 문제 번호: 11557번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();
const testCases = [];
for (let i = 0; i < n; i++) {
  const tmp = +input.shift();
  testCases.push(input.splice(0, tmp));
}

function solution(arr) {
  let max = 0;
  let answer = "";

  for (let i of arr) {
    max = Math.max(max, +i[1]);
    if (max === +i[1]) {
      answer = i[0];
    }
  }

  return answer;
}

for (let testCase of testCases) {
  const arr = testCase.map((v) => v.split(" "));
  console.log(solution(arr));
}
