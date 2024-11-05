// 문제 번호: 2251번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [a, b, c] = input.map(Number);

const visited = Array.from({ length: 201 }, () =>
  Array.from({ length: 201 }, () => Array(201).fill(0)),
);
const result = [];
const queue = [];
queue.push([0, 0, c]);

while (queue.length) {
  const [x, y, z] = queue.shift();

  // 현재 각 물통에 들어있는 물의 양의 조합이 순회되지 않은 상태라면 이 조건문을 실행
  if (!visited[x][y][z]) {
    // 우선 현재 조합을 방문체크 한다.
    visited[x][y][z] = 1;

    // 첫번째 물통이 비어있다면 세번째 물통안에 물의 양을 result 배열에 넣어준다.
    if (!x) result.push(z);

    // 현재 상태에서 물통의 물을 옮겨준다.
    // 옮긴 후의 조합은 bfs 순회를 돌 수 있도록 queue에 넣어준다.
    // 물을 옮길 수 있는 방법은 총 6가지이다.
    // x -> y, x -> z, y -> x, y -> z, z -> x, z -> y
    if (x + y > b) {
      queue.push([x + y - b, b, z]);
    } else {
      queue.push([0, x + y, z]);
    }

    if (x + z > c) {
      queue.push([x + z - c, y, c]);
    } else {
      queue.push([0, y, x + z]);
    }

    if (x + y > a) {
      queue.push([a, x + y - a, z]);
    } else {
      queue.push([x + y, 0, z]);
    }

    if (y + z > c) {
      queue.push([x, y + z - c, c]);
    } else {
      queue.push([x, 0, y + z]);
    }

    if (x + z > a) {
      queue.push([a, y, x + z - a]);
    } else {
      queue.push([x + z, y, 0]);
    }

    if (y + z > b) {
      queue.push([x, b, y + z - b]);
    } else {
      queue.push([x, y + z, 0]);
    }
  }
}

result.sort((a, b) => a - b);

console.log(result.join(" "));
