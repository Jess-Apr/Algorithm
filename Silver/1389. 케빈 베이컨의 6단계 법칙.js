// 문제 번호: 1389번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const bacon = new Array(n + 1).fill(0);
const graph = Array.from({ length: n + 1 }, () => []);

input.forEach((v) => {
  const [start, end] = v.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
});

function bfs(start) {
  const visited = new Array(n + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length) {
    let [node, count] = queue.shift();

    if (!visited[node]) {
      visited[node] = true;
      bacon[start] += count++;
      graph[node].forEach((v) => queue.push([v, count]));
    }
  }
}

for (let i = 1; i <= n; i++) {
  bfs(i);
}

bacon.shift();
console.log(bacon.indexOf(Math.min(...bacon)) + 1);
