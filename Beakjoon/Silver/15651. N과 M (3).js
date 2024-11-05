// 문제 번호: 15651번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
const [n, m] = input.split(" ").map((n) => +n);

function solution(n, m) {
  const answer = [];
  const tmp = [];

  function dfs(len) {
    if (len === m) {
      answer.push(tmp.join(" "));
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[len] = i;
        dfs(len + 1);
      }
    }
  }

  dfs(0);
  return answer.join("\n");
}

console.log(solution(n, m));
