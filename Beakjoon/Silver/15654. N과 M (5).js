// 문제 번호: 15654번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
arr.sort((a, b) => a - b);

function solution(n, m, arr) {
  const answer = [];
  const tmp = [];
  const visited = Array(n).fill(0);

  function dfs(len) {
    if (len === m) {
      answer.push(tmp.join(" "));
    } else {
      for (let i = 0; i < n; i++) {
        if (visited[i]) continue;

        tmp[len] = arr[i];
        visited[i] = 1;
        dfs(len + 1);
        visited[i] = 0;
      }
    }
  }

  dfs(0);
  return answer.join("\n");
}

console.log(solution(n, m, arr));
