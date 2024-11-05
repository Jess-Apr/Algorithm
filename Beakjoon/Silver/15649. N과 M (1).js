// 문제 번호: 15649번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
const [n, m] = input.split(" ").map((n) => +n);

function solution(n, m) {
  const answer = [];
  const tmp = [];
  const visited = new Array(n + 1).fill(0);

  function dfs(len) {
    if (len === m) {
      answer.push(tmp.join(" "));
    } else {
      for (let i = 1; i <= n; i++) {
        if (visited[i]) continue;

        tmp[len] = i;
        visited[i] = 1;
        dfs(len + 1);
        visited[i] = 0;
      }
    }
  }

  dfs(0);
  return answer.join("\n");
}

console.log(solution(n, m));
