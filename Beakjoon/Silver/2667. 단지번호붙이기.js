// 문제 번호: 2667번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const map = input.map((el) => el.split("").map(Number));

function solution(n, map) {
  const visited = Array.from({ length: n }, () => new Array(n).fill(0));
  let count = 0;
  let houses = [];
  let hc = 0;

  function dfs(i, j) {
    if (!visited[i][j]) {
      visited[i][j] = 1;
      hc++;
    } else {
      return;
    }

    if (i > 0 && map[i - 1][j]) dfs(i - 1, j);
    if (i < n - 1 && map[i + 1][j]) dfs(i + 1, j);
    if (j > 0 && map[i][j - 1]) dfs(i, j - 1);
    if (j < n - 1 && map[i][j + 1]) dfs(i, j + 1);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      hc = 0;
      if (map[i][j] && !visited[i][j]) {
        count++;
        dfs(i, j);
      }
      hc && houses.push(hc);
    }
  }

  houses.sort((a, b) => a - b);
  return [count, ...houses].join("\n");
}

console.log(solution(n, map));
