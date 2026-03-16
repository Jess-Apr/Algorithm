// 문제 번호: 14940번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));

const start = [-1, -1];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      start[0] = i;
      start[1] = j;
    }
  }

  if (start[0] !== -1 && start[1] !== -1) break;
}

const answer = Array.from({ length: n }, () => new Array(m).fill(-1));
answer[start[0]][start[1]] = 0;

const xdir = [0, 1, 0, -1];
const ydir = [-1, 0, 1, 0];
const queue = [start];
let pointer = 0;

while (pointer < queue.length) {
  const [y, x] = queue[pointer];

  for (let k = 0; k < 4; k++) {
    const ny = y + ydir[k];
    const nx = x + xdir[k];

    if (
      ny >= 0 &&
      ny < n &&
      nx >= 0 &&
      nx < m &&
      answer[ny][nx] === -1 &&
      map[ny][nx] !== 0
    ) {
      answer[ny][nx] = answer[y][x] + 1;
      queue.push([ny, nx]);
    }
  }

  pointer += 1;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) {
      answer[i][j] = 0;
    }
  }
}

const finalMap = answer.map((line) => line.join(" ")).join("\n");
console.log(finalMap);
