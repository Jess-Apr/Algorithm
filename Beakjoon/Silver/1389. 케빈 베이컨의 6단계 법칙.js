// 문제 번호: 1389번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
// 각 사람의 케빈 베이컨의 수를 담을 배열 생성
const bacon = new Array(n + 1).fill(0);
// 각각의 사람들과 직접적으로 연결된 사람들을 저장할 배열 생성
const graph = Array.from({ length: n + 1 }, () => []);

// 반복문을 돌며 graph 배열에 직접적으로 연관되어있는 사람들을 연결해줌
// 예를 들어 인덱스 1 배열에 담긴 숫자들은 1번 사람과 직접적으로 연관된 사람들을 의미한다.
input.forEach((v) => {
  const [start, end] = v.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
});

// 너비 우선 탐색을 돌며 사람들의 케빈 베이컨의 수 계산
function bfs(start) {
  // 이미 케빈 베이컨의 수를 계산한 친구들을 체크하기 위한 배열
  const visited = new Array(n + 1).fill(false);
  // 각 사람과 연결되어있는 친구들을 차례로 탐색할 수 있도록 queue 생성
  // 배열의 첫번째 요소(start)는 현재 탐색하고있는 사람을 의미하고, 두번째 요소(0)는 그 사람의 케빈 베이컨의 수를 의미한다.
  const queue = [[start, 0]];

  // queue에 배열이 있다면 반복문을 계속해서 진행
  while (queue.length) {
    // queue에서 가장 첫번째 배열을 꺼낸다.
    let [node, count] = queue.shift();

    // 만약 현재 탐색하고 있는 사람의 visited 인덱스 값이 false라면 조건문 내부 코드를 실행
    if (!visited[node]) {
      // 해당 사람의 visited 인덱스 값을 true로 바꾼다.
      visited[node] = true;
      // start의 사람에 베이컨 카운트를 올린다.
      // count++인 이유는 우선 현재 카운트를 bacon 배열에 넣어준 후, 다음 연결된 친구의 케빈 베이컨 숫자를 표현하기 위해서이다.
      // 1번 사람의 경우, [node, count]가 [1, 0]으로 시작한다.
      // bacon[1]에 우선 0을 더한다. 현재 start는 1, node도 1이기 때문에 케빈 베이컨의 수는 0이어야 하기 때문이다.
      // 그리고 count++를 통해 count의 값을 1로 만들어준다.
      // 다음 [node, count]가 [3, 1]이 된다. (3번이 직접적으로 연결되어있음)
      // bacon[1]에 1을 더해준다. 현재 1의 케빈 베이컨의 수는 1이다. 이후 count++를 통해 count의 값을 2로 만들어준다.
      // 3번과 직접적으로 연결되어있는 사람은 1번과 케빈 베이컨의 수 2로 연관될 수 있다.
      // bacon[start] += count;
      // count++;
      // 이렇게 두줄로도 표현이 가능하다.
      bacon[start] += count++;
      // graph에서 해당 node의 사람들을 찾아 queue에 푸시해준다.
      // while문이 돌면서 queue에 담긴 사람들을 한명씩 탐색하고, 케빈 베이컨의 수를 계산해서 bacon 배열에 넣을 것이다.
      graph[node].forEach((v) => queue.push([v, count]));
    }
  }
}

// 사람들은 숫자로 표현되기 때문에 반복문으로 bfs에 차례로 한명씩 탐색을 진행한다.
for (let i = 1; i <= n; i++) {
  bfs(i);
}

// bacon 배열은 인덱스 값을 맞추기 위해 배열 값을 사람 수보다 하나 더 크게 만들었기 때문에 제일 첫번째 값을 shift 해준다.
// 그렇지 않으면 첫번째 값이 0이기 때문에 제대로된 답이 나오지 않는다.
bacon.shift();
// 베이컨 계수가 가장 작은 사람, 여러명이라면 그 중 번호가 가장 작은 사람을 출력한다.
// 배열의 첫번째 값을 shift했기 때문에 인덱스 값에 1을 더해주는 것을 잊으면 안된다.
console.log(bacon.indexOf(Math.min(...bacon)) + 1);
