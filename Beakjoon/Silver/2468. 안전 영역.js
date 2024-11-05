// 문제 번호: 2468번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const map = input.map((el) => el.split(" ").map(Number));

let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    max = Math.max(max, map[i][j]);
  }
}

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

function dfs(y, x, visited) {
  for (let l = 0; l < 4; l++) {
    const ny = y + dy[l];
    const nx = x + dx[l];

    if (ny >= 0 && ny < n && nx >= 0 && nx < n && !visited[ny][nx]) {
      visited[ny][nx] = true;
      dfs(ny, nx, visited);
    }
  }
}

let maxCnt = 0;
for (let i = 0; i < max; i++) {
  let cnt = 0;
  const visited = [...Array(n)].map((_, y) => [...Array(n)].map((_, x) => map[y][x] <= i));

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (!visited[j][k]) {
        visited[j][k] = true;
        dfs(j, k, visited);
        cnt++;
      }
    }
  }

  maxCnt = Math.max(maxCnt, cnt);
}

console.log(maxCnt);
