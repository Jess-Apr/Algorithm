// 문제 번호: 7576번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const tomatoes = input.slice(1).map((line) => line.split(" ").map(Number));

const xdir = [1, 0, -1, 0];
const ydir = [0, 1, 0, -1];

let pointer = 0;
const queue = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (tomatoes[i][j] === 1) {
      queue.push([i, j, 0]);
    }
  }
}

let answer = 0;

while (pointer < queue.length) {
  const [y, x, count] = queue[pointer];

  for (let k = 0; k < 4; k++) {
    const ny = y + ydir[k];
    const nx = x + xdir[k];
    const ncount = count + 1;

    if (ny >= 0 && nx >= 0 && ny < n && nx < m && tomatoes[ny][nx] === 0) {
      tomatoes[ny][nx] = ncount;
      queue.push([ny, nx, ncount]);
      answer = Math.max(answer, ncount);
    }
  }

  pointer++;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (tomatoes[i][j] === 0) {
      console.log(-1);
      process.exit(0);
    }
  }
}

console.log(answer);
