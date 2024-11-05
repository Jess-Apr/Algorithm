// 문제 번호: 2583번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [m, n, k] = input.shift().split(" ").map(Number);
const papers = input.map((el) => el.split(" ").map(Number));

let space = Array.from({ length: m }, () => new Array(n).fill(0));
for (let i = 0; i < k; i++) {
  const cur = papers[i];
  for (let j = cur[1]; j < cur[3]; j++) {
    for (let k = cur[0]; k < cur[2]; k++) {
      if (space[j][k]) continue;
      else space[j][k] = 1;
    }
  }
}

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const answer = [];
function bfs(y, x) {
  let area = 0;
  const queue = [];
  queue.push([y, x]);
  space[y][x] = 1;

  while (queue.length) {
    [curY, curX] = queue.shift();
    area++;

    for (let d of directions) {
      [nY, nX] = [curY + d[0], curX + d[1]];

      if (nY >= 0 && nY < m && nX >= 0 && nX < n) {
        if (space[nY][nX]) continue;

        queue.push([nY, nX]);
        space[nY][nX] = 1;
      }
    }
  }

  answer.push(area);
}

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (space[i][j]) continue;
    bfs(i, j);
  }
}

answer.sort((a, b) => a - b);
console.log(`${answer.length}\n${answer.join(" ")}`);
