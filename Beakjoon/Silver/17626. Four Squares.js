// 문제 번호: 17626번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = +input;

function solution(n) {
  // 구하고자 하는 수의 최소 개수의 제곱수 합은 해당 수에서 어떤 제곱수를 뺐을때 그 숫자의 최소 제곱수 + 1의 값으로 계산할 수 있다.
  const dp = new Array(n + 1).fill(0);
  // 1의 최소 제곱수는 1 ** 2 이므로, 1개다.
  dp[1] = 1;

  // 1은 이미 배열에 들어가있기 때문에 2부터 n까지 각 숫자의 최소 제곱수를 구한다.
  for (let i = 2; i <= n; i++) {
    // min 변수에는 가장 작은 제곱수가 들어가야 하므로 Infinity를 우선 할당한다.
    let min = Infinity;
    let j = 1;

    // j의 제곱 값이 i를 넘지 않으면 반복문을 계속 실행한다.
    // 예를 들어 12의 경우, [3 ** 2, 1 ** 2, 1 ** 2, 1 ** 2] 네개의 제곱수보다, [2 ** 2, 2 ** 2, 2 ** 2] 세개의 제곱수가 더 개수가 적다.
    // 가장 작은 제곱수를 구하기 위해 해당 수를 넘지 않는 범위에서 제곱수를 하나씩 빼보며 해당 수의 최소 제곱수 개수를 구한다.
    while (j ** 2 <= i) {
      min = Math.min(min, dp[i - j ** 2]);
      j++;
    }

    // 현재 수의 최소 제곱수 개수는 어떤 제곱수를 뺀 수의 최소 제곱수 개수이기 때문에 1을 더해준다.
    // 예를 들어, 5의 최소 제곱수는 [2 ** 2, 1 ** 1]이다. 2 ** 2를 빼면 1의 최소 제곱수 개수인 1과 같다.
    // 여기서 2 ** 2에 해당하는 1을 더해주면 5의 최소 제곱수 개수가 되는 것이다.
    dp[i] = min + 1;
  }

  // n의 최소 제곱수 개수를 리턴한다.
  return dp[n];
}

console.log(solution(n));
