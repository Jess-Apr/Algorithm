// 문제 번호: 1922번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
input.shift();
const computers = input.map((el) => el.split(" ").map(Number));

// 크루스칼 알고리즘을 사용
// 간선은 (정점의 수 - 1)개를 사용해야 하고, 간선을 연결하는데 드는 최소 비용부터 탐색해야한다.
// (정점의 수 - 1)개의 간선으로 모든 정점을 이어야 한다면 사이클이 형성되어서는 안된다.
// 사이클 형성을 막기 위해 Union-Find 알고리즘을 사용하여 특정 간선이 사이클을 형성하는지 알아내야 한다.

// (1) Union-Find 알고리즘
// 사이클을 형성하는지 알아낼 parent 배열
// 처음에는 n번 정점의 값 = n 으로 초기화해준다.
const parent = [];
for (let i = 0; i <= n; i++) {
  parent[i] = i;
}

// 사이클을 형성하는지 parent 배열을 탐색할 함수
// n번 정점의 값이 n이면 아직 어떠한 정점과도 연결되지 않았기 때문에 n값을 그대로 리턴해준다.
// 그게 아니라면 재귀 함수를 통해 부모 노드(parent 배열에서 n이 위치한 인덱스가 가리키는 값)를 타고 올라가며 사이클 탐색을 진행한다.
// 탐색을 돌다 루트 노드를 발견하게 되면, parent[x] === x 조건이 성립하기 때문에 루트노드의 값을 리턴하게 된다.
// 루트노드는 아무 정점과도 연결되지 않았기 때문에 루트노드이기 때문.
function getParent(x) {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent[x]));
}

// (2) 크루스칼 알고리즘
function solution(computers) {
  // 네트워크를 연결하는데 최소한의 비용을 사용해야하기 때문에 우선 네트워크를 연결하는 비용을 기준으로 배열을 오름차순으로 정렬해준다.
  computers.sort((a, b) => a[2] - b[2]);
  // 최소 비용을 기록할 cost 변수
  let cost = 0;

  // 간선 리스트를 돌면서 최소 비용을 계산한다.
  for (let c of computers) {
    // 첫번째 컴퓨터와 두번째 컴퓨터가 연결된 루트 노드가 같을 경우, 두 컴퓨터가 이어지면 사이클이 형성된다.
    // 따라서 continue로 간선을 잇지 않고 넘어간다.
    if (getParent(c[0]) === getParent(c[1])) {
      continue;
    } else {
      // 첫번째 컴퓨터와 두번째 컴퓨터가 연결된 루트 노드가 다를 경우, 두 컴퓨터가 이어져도 사이클이 형성되지 않는다.
      // 간선을 이어준다.
      const c1 = getParent(c[0]);
      const c2 = getParent(c[1]);

      // 간선을 이어줄 경우, 따로 떨어져 연결되지 않았던 두 정점(또는 정점의 집합)들이 이 간선을 통해 연결된다.
      // 정점들이 일정한 패턴을 가지고 이어질 수 있도록 두 루트노드의 값을 비교하여 더 작은 루트노드 값으로 정점(또는 정점 집합)들을 합쳐준다.
      if (c1 < c2) parent[c2] = c1;
      else parent[c1] = c2;
      // 간선이 연결되었으므로 (= 네트워크가 연결되었으므로) 비용을 추가해준다.
      cost += c[2];
    }
  }

  return cost;
}

console.log(solution(computers));
