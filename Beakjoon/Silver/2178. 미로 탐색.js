// 문제 번호: 2178번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const maze = input.map((el) => el.split("").map(Number));

function solution(n, m, maze) {
  // 방문 여부를 확인해주고, 해당 좌표까지의 최단 거리를 저장할 visited 배열
  // 0이면 방문을 하지 않은 상태이고, 0 이상의 수이면 (0, 0)에서 해당 좌표까지의 최단 거리이다.
  const visited = Array.from({ length: n }, () => Array(m).fill(0));

  // 최단거리 탐색을 해야하기 때문에 너비우선탐색을 사용한다.
  function bfs(row, col) {
    // 위, 아래, 왼쪽, 오른쪽 방향을 탐색하기 위한 방향 좌표
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    // 이동할 수 있는 좌표를 queue에 넣고 하나씩 차례로 탐색
    const queue = [];
    // bfs가 처음 호출 될 때는 (0, 0) 좌표가 들어가기 때문에 queue에 현재 위치를 넣고 visited 배열의 (0, 0) 좌표를 1로 설정해준다. (시작위치 포함)
    queue.push([row, col]);
    visited[row][col] = 1;

    // queue에 원소가 있으면 (이동 가능한 좌표가 있으면) 반복문을 계속 실행한다.
    while (queue.length) {
      // queue는 선입선출이기 때문에 가장 앞의 좌표를 shift로 빼낸다.
      const [x, y] = queue.shift();

      // x, y 좌표를 기준으로 이동할 수 있는 좌표를 계산한 후, 이동 가능한 좌표는 전부 queue에 push한다.
      for (let i = 0; i < 4; i++) {
        const [newX, newY] = [x + dx[i], y + dy[i]];

        if (newX < 0 || newY < 0 || newX >= n || newY >= m) continue;

        if (maze[newX][newY] && !visited[newX][newY]) {
          // visited 배열에서 새로 이동할 좌표까지의 최단 거리는 x, y 좌표에서 1을 더한 숫자이다.
          // 해당 좌표까지 최단으로 가기 때문에 이미 멀리 돌아온 길의 경우 visited 배열의 숫자가 0이 아니라서 이 조건문 안으로 들어올 수 없다.
          // 즉, visited[newX][newY]에 들어갈 숫자가 어느길을 따라왔는지에 따라 최단 거리인지 비교하여 숫자를 넣어주는 과정은 넣어줄 필요가 없다.
          visited[newX][newY] = visited[x][y] + 1;
          queue.push([newX, newY]);
        }
      }
    }
  }

  // bfs를 호출하고, visited에서 n, m 좌표의 숫자를 출력한다.
  bfs(0, 0);
  return visited[n - 1][m - 1];
}

console.log(solution(n, m, maze));
