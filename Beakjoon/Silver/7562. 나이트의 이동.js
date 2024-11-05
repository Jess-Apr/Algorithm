// 문제 번호: 7562번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const testCases = [];
for (let i = 0; i < n; i++) {
  const tmp = input.splice(0, 3).map((el) => el.split(" ").map(Number));
  testCases.push(tmp);
}

const directions = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

function bfs(size, sy, sx, ey, ex) {
  const visited = Array.from({ length: size }, () => new Array(size).fill(0));
  const queue = [];
  queue.push([sy, sx, 0]);
  visited[sy][sx] = 1;

  while (queue.length) {
    const [y, x, move] = queue.shift();
    if (y === ey && x === ex) {
      console.log(move);
      return;
    }

    for (let d of directions) {
      const [ny, nx, m] = [y + d[0], x + d[1], move];

      if (ny >= 0 && ny < size && nx >= 0 && nx < size) {
        if (visited[ny][nx]) continue;

        visited[ny][nx] = 1;
        queue.push([ny, nx, m + 1]);
      }
    }
  }
}

for (let testCase of testCases) {
  const [a, b, c] = testCase;
  bfs(a[0], b[0], b[1], c[0], c[1]);
}
