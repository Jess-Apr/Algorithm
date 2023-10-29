// 문제 번호: 15652번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);
const [n, m] = input;

// N과M(2) 문제와 풀이가 거의 같다. 숫자가 중복되어도 괜찮다는 조건이 있으므로 dfs를 호출할 때 넣어주는 첫번째 인자만 다르다.
function solution(n, m) {
  // 조건을 만족하는 수열을 모두 담아줄 answer 배열 생성
  const answer = [];
  // 조건을 만족하는 각각의 수열을 찾을 때 사용할 tmp 배열 생성
  const tmp = [];

  // dfs 탐색을 할 함수 생성
  // cur 변수는 현재 탐색하고 있는 숫자를 담고 있고, len 변수는 tmp에 담겨있는 수열의 길이를 담고있다.
  function dfs(cur, len) {
    // tmp에 담겨있는 수열의 길이가 m의 길이와 같다면 answer에 push해준다.
    if (len === m) {
      answer.push(tmp.join(" "));
    } else {
      // tmp의 길이가 m보다 작다면 숫자를 더 추가할 수 있으므로 반복문을 사용해 n까지의 숫자를 순회한다.
      // 수열 내에서 숫자가 중복되면 안되기 때문에 i는 cur부터 시작한다.
      for (let i = cur; i <= n; i++) {
        // tmp 배열에 i를 추가해준다.
        // tmp[len]으로 index값에 접근해서 숫자를 할당해주는 것이기 때문에 반복문을 돌더라도 숫자가 배열에 계속 쌓이는 것이 아니고, len의 위치에 cur부터 숫자가 하나씩 들어가며 가능한 수열을 전부 탐색하게 된다.
        // 예: len이 첫번째 자리일 경우 첫번째 자리가 1일때의 수열을 dfs를 통해 전부 찾고, 반복문을 돌며 2, 3, 4 ... 가 첫번째 자리일 때의 수열을 전부 찾는다.
        // 수열이 오름차순이어야 한다는 조건은 i가 cur부터 반복문을 돌기 때문에 무조건 만족하게 된다.
        tmp[len] = i;
        // 재귀 함수를 호출함으로써 dfs 탐색을 계속한다.
        // 매개변수로는 현재 숫자, 현재 수열보다 하나 더 긴 길이를 넣어준다.
        // 첫번째 인자로 현재 숫자를 넣어주게 되면, 재귀 함수가 호출 된 후 반복문을 돌때 같은 수부터 다시 반복하기 때문에 수가 중복된 수열을 얻을 수 있기 때문이다.
        dfs(i, len + 1);
      }
    }
  }

  // dfs 함수를 숫자 1, 수열 길이 0부터 탐색할 수 있도록 매개변수를 넣어 돌려준다.
  dfs(1, 0);
  // answer 배열을 정답 조건에 맞추어 출력해준다.
  // 사전 순으로 증가하는 순서로 수열을 출력해야 한다는 조건은 반복문이 1부터 하나씩 숫자를 올려가며 돌면서 자동으로 answer 배열에 오름차순으로 수열이 들어가기 때문에 따로 조건을 달아주지 않아도 된다.
  return answer.join("\n");
}

console.log(solution(n, m));
