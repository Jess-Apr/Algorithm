// 문제 번호: 1743번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m, k] = input.shift().split(" ").map(Number);
const pos = input.map((el) => el.split(" ").map(Number));

const map = Array.from({ length: n }, () => new Array(m).fill(0));

for (let [a, b] of pos) {
  map[a - 1][b - 1] = 1;
}

function solution(map) {
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let max = 0;
  let tmp = 0;

  function dfs(i, j) {
    visited[i][j] = 1;
    tmp++;

    dir.forEach(([di, dj]) => {
      const ni = i + di;
      const nj = j + dj;

      if (ni >= 0 && ni < n && nj >= 0 && nj < m && map[ni][nj] && !visited[ni][nj]) {
        dfs(ni, nj);
      }
    });
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 초기화는 dfs 함수 호출 전에 실행한다.
      // 수정하기 이전의 코드는 j를 순회하는 for 문의 외부에 있었다.
      // 그래서 같은 j열에서 덩어리 하나의 탐색이 끝나고 같은 열의 다른 덩어리를 만났을 때 초기화를 해주지 않아 음식물이 누적되는 오류가 생길 수 있었다.
      tmp = 0;
      if (map[i][j] && !visited[i][j]) dfs(i, j);
      max = Math.max(max, tmp);
    }
    // 수정 전 코드
    // tmp = 0;
    // max = Math.max(max, tmp);
  }

  return max;
}

console.log(solution(map));
