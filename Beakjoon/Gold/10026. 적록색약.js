// 문제 번호: 10026번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const grid = input.map((el) => el.split(""));

const visited = Array.from({ length: n }, () => Array(n).fill(0));
let count = [0, 0];

const col = [-1, 1, 0, 0];
const row = [0, 0, -1, 1];

function dfs(x, y) {
  visited[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    newX = x + col[i];
    newY = y + row[i];

    if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
      if (grid[newX][newY] === grid[x][y] && !visited[newX][newY]) {
        dfs(newX, newY);
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      dfs(i, j);
      count[0]++;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    visited[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] === "G") {
      grid[i][j] = "R";
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      dfs(i, j);
      count[1]++;
    }
  }
}

console.log(count.join(" "));
