// 문제 번호: 4386번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const stars = input.map((el) => el.split(" ").map(Number));

const parent = Array.from({ length: n }, (_, i) => i);
function getParent(x) {
  if (parent[x] === x) return x;
  else return (parent[x] = getParent(parent[x]));
}

const queue = [];
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const a = stars[i];
    const b = stars[j];

    const dist = +Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2).toFixed(2);
    // x좌표, y좌표를 가진 정점을 n번 정점으로 표현함으로써 i번 정점부터 j번 정점까지의 거리는 dist라는 배열을 queue에 넣어줌
    // x좌표, y좌표를 하나하나 비교해가며 어떤 정점인지 확인할 필요 없이 그냥 번호를 붙여 정점을 구분
    queue.push([i, j, dist]);
  }
}
queue.sort((a, b) => a[2] - b[2]);

function solution(queue) {
  let cost = 0;
  let cnt = 0;

  for (let q of queue) {
    const aParent = getParent(q[0]);
    const bParent = getParent(q[1]);
    if (!(aParent === bParent)) {
      cost += q[2];

      if (aParent < bParent) parent[bParent] = aParent;
      else parent[aParent] = bParent;

      cnt++;
    }

    if (cnt === n - 1) break;
  }

  return cost;
}

console.log(solution(queue));
