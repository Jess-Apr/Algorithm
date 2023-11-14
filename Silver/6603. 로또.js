// 문제 번호: 6603번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
let testCases = input.map((arr) => arr.split(" "));

function solution(k, s) {
  // 모든 로또번호의 경우의 수를 담아줄 answer 배열 생성
  const answer = [];
  // 각각의 경우의 수를 구할때 사용할 tmp 배열 생성
  const tmp = [];

  // dfs 탐색을 할 함수 생성
  // idx는 s배열에서 현재 탐색하고 있는 인덱스를 나타내고, len은 tmp의 길이를 나타낸다.
  function dfs(idx, len) {
    // tmp의 길이가 6이라면 dfs 탐색을 종료하고 answer에 배열을 담는다.
    if (len === 6) {
      answer.push(tmp.join(" "));
    } else {
      // 아직 tmp가 다 안채워졌다면 반복문을 돌며 dfs 탐색을 계속한다.
      for (let i = idx; i < k; i++) {
        // 집합 s가 오름차순으로 주어지기 때문에 tmp의 마지막 숫자가 새롭게 더해질 숫자(s집합의 현재 인덱스값)보다 크다면 tmp에 새로운 값을 추가하지 않고 건너뛴다.
        if (tmp[len - 1] >= s[i]) continue;

        // 만약 오름차순이 유지가 되었다면 새로운 숫자(s집합의 현재 인덱스값)을 tmp 배열의 len 인덱스 자리에 추가한다.
        tmp[len] = s[i];
        // 다음 dfs 탐색을 위해 인덱스값을 하나 더해주고, tmp의 길이가 늘어났으므로 len도 하나 더해준다.
        dfs(idx + 1, len + 1);
      }
    }
  }

  // dfs 탐색을 s집합의 인덱스 0, tmp 길이 0 부터 시작한다.
  dfs(0, 0);
  return answer.join("\n");
}

// 각 테스트케이스 결과 사이에 빈 줄을 입력해야 하므로 result 배열 생성
let result = [];
// 반복문을 돌면서 각 테스트케이스의 결과를 result 배열에 넣어준 후 빈줄을 넣어 join해준다.
for (let testCase of testCases) {
  const k = testCase.shift();
  const s = testCase.map(Number);
  result.push(solution(k, s));
}
console.log(result.join("\n\n"));
