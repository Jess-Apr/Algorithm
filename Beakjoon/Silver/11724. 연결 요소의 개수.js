// 문제 번호: 11724번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((v) => v.split(" ").map(Number));

const hash = {};
for (let [u, v] of edges) {
  if (!hash[u]) hash[u] = [];
  if (!hash[v]) hash[v] = [];

  hash[u].push(v);
  hash[v].push(u);
}

const visited = new Array(n + 1).fill(0);
let answer = 0;

for (let i = 1; i <= n; i++) {
  if (visited[i] === 0) {
    answer++;

    const stack = [i];
    visited[i] = 1;

    while (stack.length) {
      const cur = stack.pop();

      for (let next of hash[cur] || []) {
        if (!visited[next]) {
          visited[next] = 1;
          stack.push(next);
        }
      }
    }
  }
}

console.log(answer);
