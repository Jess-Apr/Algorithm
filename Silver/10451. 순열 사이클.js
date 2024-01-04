// 문제 번호: 10451번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const testCases = [];
for (let i = 1; i < input.length; i += 2) {
  testCases.push(input[i].split(" ").map(Number));
}

function solution(testCase) {
  const visited = new Array(testCase.length).fill(false);
  let count = 0;

  function dfs(idx) {
    if (visited[idx]) {
      count++;
      return;
    }

    visited[idx] = true;
    dfs(testCase[idx] - 1);
  }

  for (let i = 0; i < testCase.length; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  return count;
}

for (let testCase of testCases) {
  console.log(solution(testCase));
}
