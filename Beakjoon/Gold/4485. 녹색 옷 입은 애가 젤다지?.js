// 문제 번호: 4485번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const d = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let num = 1;
let idx = 0;

while (true) {
  const n = +input[idx++];
  if (!n) return;

  const board = Array.from({ length: n }, () => input[idx++].split(" ").map(Number));
  // 해당 위치까지의 최소 거리를 계산하여 저장할 배열
  const visited = Array.from({ length: n }, () => Array(n).fill(Infinity));
  visited[0][0] = board[0][0];

  const queue = [[0, 0]];

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + d[i][0], x + d[i][1]];

      if (ny >= 0 && nx >= 0 && ny < n && nx < n) {
        // 만약에 이동할 위치의 거리가 이전 위치까지 가는 거리 + 이동할 위치까지의 거리보다 크다면 최소 거리를 다시 계산해주기 위해 queue에 넣어준다.
        if (visited[ny][nx] > visited[y][x] + board[ny][nx]) {
          visited[ny][nx] = visited[y][x] + board[ny][nx];
          queue.push([ny, nx]);
        }
      }
    }
  }

  console.log(`Problem ${num++}: ${visited[n - 1][n - 1]}`);
}
