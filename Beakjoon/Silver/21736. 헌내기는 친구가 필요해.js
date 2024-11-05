// 문제 번호: 21736번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((el) => el.split(""));

function solution(n, m, map) {
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  let count = 0;
  const cur = [0, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === "I") {
        cur[0] = i;
        cur[1] = j;
      }
    }
  }

  function bfs(row, col) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [];
    queue.push([row, col]);
    visited[row][col] = 1;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

        if (map[nx][ny] !== "X" && !visited[nx][ny]) {
          if (map[nx][ny] === "P") count++;
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  bfs(...cur);
  return count === 0 ? "TT" : count;
}

console.log(solution(n, m, map));
