// 문제 번호: 1260번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [count, line, start] = input.shift().split(" ").map(Number);
const arr = input.slice().map((el) => el.split(" ").map(Number));

function solution(count, start, arr) {
  // 각 정점마다 연결된 정점들을 담아 그래프를 그릴 graph 배열 생성
  const graph = [...Array(count + 1)].map(() => []);
  // arr를 반복문으로 돌며 각 정점에 연결된 정점들을 graph에 담아준다.
  arr.forEach(([first, second]) => {
    graph[first].push(second);
    graph[second].push(first);
  });

  // dfs 탐색을 할 dfs 함수 선언
  function dfs(cur) {
    // 다음에 탐색할 정점들을 담을 stack 배열 생성
    const stack = [cur];
    // 중복을 방지하기 위해 방문한 정점들을 체크할 visited 배열 생성
    const visited = Array(count + 1).fill(0);
    // 탐색한 순서대로 정점들을 담아줄 answer 배열 생성
    const answer = [];

    // stack에 정점들이 담겨있는 동안 while문을 돈다.
    while (stack.length) {
      // 현재 탐색하고 있는 정점의 숫자를 stack으로부터 pop 한다.
      // pop을 함으로써 해당 정점과 연결된 정점 중 가장 작은 숫자의 정점이 탐색되고, 다음엔 그 숫자와 연결된 가장 작은 숫자의 정점이 탐색된다. 깊이 탐색이 끝나면 옆으로 이동하여 정점 탐색을 계속한다. (깊이 순)
      // 방문한 정점이라면 이대로 pop 된 후 다음 반복문으로 진행된다.
      const node = stack.pop();
      // 만약 방문하지 않은 정점이라면 visited에 해당 정점을 방문했다고 표기한 후 answer 배열에 푸쉬한다.
      // 이어진 다음 정점을 탐색하기 위해 해당 정점과 이어진 다른 정점들을 전부 stack에 푸쉬해준다.
      if (!visited[node]) {
        visited[node] = 1;
        answer.push(node);
        stack.push(...graph[node]);
      }
    }

    return answer.join(" ");
  }

  // bfs 탐색을 할 bfs 함수 선언
  function bfs(cur) {
    // 다음에 탐색할 정점들을 담을 queue 배열 생성
    const queue = [cur];
    // 중복을 방지하기 위해 방문한 정점들을 체크할 visited 배열 생성
    const visited = Array(count + 1).fill(0);
    // 탐색한 순서대로 정점들을 담아줄 answer 배열 생성
    const answer = [];

    // queue에 정점들이 담겨있는 동안 while문을 돈다.
    while (queue.length) {
      // 현재 탐색하고 있는 숫자를 queue로부터 shift 한다.
      // shift를 함으로써 현재 정점과 이어져있는 다른 정점들이 차례로 탐색된 후 해당 단계 탐색이 완료되면 한단계 아래로 내려간다. (넓이 순)
      // 방문한 정점이라면 이대로 shift 된 후 다음 반복문으로 진행된다.
      const node = queue.shift();
      // 만약 방문하지 않은 정점이라면 visited에 해당 정점을 방문했다고 표기한 후 answer 배열에 푸쉬한다.
      // 이어진 다음 정점을 탐색하기 위해 해당 정점과 이어진 다른 정점들을 전부 queue에 푸쉬해준다.
      if (!visited[node]) {
        visited[node] = 1;
        answer.push(node);
        queue.push(...graph[node]);
      }
    }

    return answer.join(" ");
  }

  // stack에서 pop을 해서 차례로 탐색을 돌기 때문에, 숫자가 작은 정점부터 탐색하기 위해 각 배열을 내림차순으로 정렬해준다.
  // 내림차순 = 마지막 숫자가 가장 작음 = pop을 하면 가장 작은 숫자가 나옴
  // 전체 배열을 내림차순으로 정렬해준것이 아니라 배열 안의 각각의 배열, 즉 각 정점에 연결되어있는 정점들을 내림차순으로 정렬해주었다.
  graph.forEach((el) => el.sort((a, b) => b - a));
  const dfsAnswer = dfs(start);
  // queue에서 shift을 해서 차례로 탐색을 돌기 때문에, 숫자가 작은 정점부터 탐색하기 위해 각 배열을 오름차순으로 정렬해준다.
  // 오름차순 = 첫번째 숫자가 가장 작음 = shift를 하면 가장 작은 숫자가 나옴
  graph.forEach((el) => el.sort((a, b) => a - b));
  const bfsAnswer = bfs(start);
  return [dfsAnswer, bfsAnswer].join("\n");
}

console.log(solution(count, start, arr));
