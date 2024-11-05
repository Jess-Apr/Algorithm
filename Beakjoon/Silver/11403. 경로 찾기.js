// 문제 번호: 11403번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const graph = input.map((el) => el.split(" ").map(Number));

function solution(n, graph) {
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 최단 경로를 찾는 문제가 아니기 때문에 graph[i][j]에 대한 조건은 없어도 된다.
        // 반복문을 돌다보면 k를 거치지 않고 i에서 j로 바로 가는 경로가 있는지 찾아보는 조건이 있기 때문이다.
        if (graph[i][k] && graph[k][j]) graph[i][j] = 1;
      }
    }
  }

  return graph.map((el) => el.join(" ")).join("\n");
}

console.log(solution(n, graph));
