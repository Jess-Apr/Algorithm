// 문제 번호: 11725번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const graph = input.slice(1);

const list = Array.from({ length: n + 1 }, () => []);

for (let nodes of graph) {
  const [node1, node2] = nodes.split(" ").map(Number);
  list[node1].push(node2);
  list[node2].push(node1);
}

const visited = new Array(n + 1).fill(0);
const parent = new Array(n + 1).fill(0);

const stack = [1];
visited[1] = 1;

while (stack.length) {
  const cur = stack.pop();

  for (let node of list[cur]) {
    if (!visited[node]) {
      visited[node] = 1;
      parent[node] = cur;
      stack.push(node);
    }
  }
}

console.log(parent.slice(2).join("\n"));
