// 문제 번호: 2644번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const [start, end] = input.shift().split(" ").map(Number);
const m = Number(input.shift());
const arr = input.slice().map((el) => el.split(" ").map(Number));

const graph = [...Array(n + 1)].map(() => []);
arr.forEach(([first, second]) => {
    graph[first].push(second);
    graph[second].push(first);
});

function bfs(cur, depth) {
    const queue = [[cur, depth]];
    const visited = Array(n + 1).fill(0);

    while (queue.length) {
        const [node, d] = queue.shift();

        if (node === end) return d;

        if (!visited[node]) {
            visited[node] = 1;
            graph[node].forEach((neighbor) => queue.push([neighbor, d + 1]));
        }
    }

    return -1;
}

console.log(bfs(start, 0));
