// 문제 번호: 2636번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const cheeze = input.map((el) => el.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(0));
const yDir = [-1, 1, 0, 0];
const xDir = [0, 0, -1, 1];
let time = 0;
let total = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (cheeze[i][j]) total++;
  }
}

function bfs() {
  // while문은 호출 스택에 새로운 스택을 추가하지 않는다.
  // bfs 함수를 계속 재귀함수로 호출할 경우 스택이 계속 쌓이기 때문에 스택 오버플로우 문제가 생길 수 있다.
  // 여기에서는 이러한 이유로 bfs를 재귀함수로 호출하는 대신 while문으로 동일한 작업을 반복해준다.
  while (total) {
    const past = total;
    const queue = [];
    queue.push([0, 0]);

    visited.forEach((row) => row.fill(0));
    visited[0][0] = 1;

    while (queue.length) {
      const [curY, curX] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const ny = curY + yDir[i];
        const nx = curX + xDir[i];

        if (0 <= ny && ny < n && 0 <= nx && nx < m) {
          // bfs 탐색을 하다 공기를 만나면 다음 탐색을 위해 주변 좌표를 queue에 넣어준다.
          if (!visited[ny][nx] && !cheeze[ny][nx]) {
            visited[ny][nx] = 1;
            queue.push([ny, nx]);
            // bfs 탐색을 하다 치즈를 만나면 녹여준다.
            // 겉부분만 녹여주기 위해 주변 좌표는 더이상 queue에 넣어주지 않는다.
          } else if (!visited[ny][nx] && cheeze[ny][nx]) {
            visited[ny][nx] = 1;
            total--;
            cheeze[ny][nx] = 0;
          }
        }
      }
    }

    // 치즈를 녹이는 한 사이클이 끝나면 시간을 한시간 추가해준다.
    time++;

    // 남은 치즈의 개수가 0이면 시간과 마지막 한시간에 남은 치즈의 개수를 반환한다.
    if (!total) return [time, past];
  }
}

console.log(bfs().join("\n"));
