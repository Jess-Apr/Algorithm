// 문제 번호: 1697번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const pos = input.map(Number);

function solution(pos) {
  // 가장 빠르게 동생을 찾아야 하기 때문에 같은 위치는 다시 방문할 필요가 없다. 방문 체크하기.
  const visited = new Array(100001).fill(0);
  const queue = [];
  queue.push([pos[0], 0]);

  while (queue.length) {
    const [cur, depth] = queue.shift();

    // 해당 위치를 방문했다면 탐색을 건너뛴다.
    // queue에 푸시할때 방문하지 않은 노드만 넣었음에도 불구하고 다시 체크를 하는 이유는 queue에 푸시할때 방문 체크를 하는 것은 queue에 추가되지 않는 노드에 대해서만이고, queue에 추가된 노드에 대한 것은 방문체크를 하지 않기 때문이다.
    if (visited[cur]) continue;

    // 방문하지 않았다면 해당 위치를 방문 처리 하고, 현재 위치가 동생의 위치와 같다면 현재 위치를 반환한다.
    // 가장 빨리 찾는 방법이 가장 빨리 반환될 것이므로 가장 빨리 찾는 경우를 따로 기록하지는 않아도 된다.
    visited[cur] = 1;
    if (cur === pos[1]) {
      return depth;
    }

    // 현재 위치가 동생의 위치와 다르다면 다음 탐색할 위치를 queue에 푸시해준다.
    // 다음 위치가 유효해야하기 때문에 방문처리 되지 않았고, 0보다 크고 100000보다 작아야한다는 조건을 건다.
    for (let next of [cur + 1, cur - 1, cur * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        queue.push([next, depth + 1]);
      }
    }
  }
}

console.log(solution(pos));
