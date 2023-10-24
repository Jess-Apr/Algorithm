// 문제 번호: 2606번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const computerMap = input.slice(2).map((el) => el.split(" ").map(Number));

function solution(n, computerMap) {
  // 연결된 컴퓨터의 그래프를 그려줄 graph 배열 생성
  const graph = new Array(n + 1).fill().map(() => []);
  // dfs를 돌면서 각각의 컴퓨터를 의미하는 graph 요소를 탐색했는지 확인할 visited 배열 생성
  const visited = new Array(n + 1).fill(0);
  // 1번 컴퓨터에 의해 감염된 컴퓨터의 수
  let answer = 0;

  // 컴퓨터들이 연결된 그래프를 그려준다.
  // graph의 n번째 요소인 배열은 n번째 컴퓨터가 어떤 컴퓨터와 연결되어있는지 보여준다.
  for (let i of computerMap) {
    graph[i[0]].push(i[1]);
    graph[i[1]].push(i[0]);
  }

  // 1번 컴퓨터는 감염된 컴퓨터 숫자에 들어가지 않기 때문에 visited를 1로 바꿔준다.
  visited[1] = 1;

  // dfs 함수를 이용해 그래프를 순회한다.
  function dfs(node) {
    // graph의 n번째 배열 요소에 들어있는 숫자들을 반복문으로 탐색한다.
    // n은 처음 시작할때는 1, 재귀 함수로 들어가게 되면 그 안에 요소가 가리키는 숫자가 들어간다.
    for (let num of graph[node]) {
      // 만약 배열 안에 들어있는 숫자가 인덱스로 가리키는 visited 배열의 요소가 0 이라면 1로 바꿔주고 answer를 1 올려준다.
      // 그리고 그 안에 들어있는 숫자들을 탐색하기 위해 dfs 재귀 함수를 다시 불러준다.
      // 배열 안에 들어있는 숫자의 visited 값이 1이라면 재귀함수를 부르지 않기 때문에 무한 루프에 빠지지 않는다.
      if (!visited[num]) {
        visited[num] = 1;
        answer++;
        dfs(num);
      }
    }
  }

  dfs(1);
  return answer;
}

console.log(solution(n, computerMap));
