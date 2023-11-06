// 문제 번호: 1932번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const h = +input.shift();
const triangle = input.map((el) => el.split(" ").map(Number));

function solution(h, triangle) {
  // 삼각형의 각 숫자를 이전 행에서 해당 숫자까지 올 수 있는 최댓값으로 바꿔주어야 하므로 삼각형의 값을 복사한 배열을 생성한다.
  const dp = [...triangle];
  // 삼각형의 각 행의 가장 첫번째 숫자에 도달하는 방법은 바로 위의 행의 첫번째 숫자로부터 수를 더해 오는 것이므로 경우의 수가 하나이다.
  // 마찬가지로 각 행의 가장 마지막 숫자에 도달하려면 바로 위의 행의 마지막 숫자로부터 수를 더해 오는 경우밖에 없다.
  // 그 외의 숫자의 경우 바로 위의 행의 왼쪽 숫자 또는 오른쪽 숫자에서 올 수 있다. 즉, 두개의 경우의 수가 있다.
  // 위 행의 두 숫자 중 더 큰 숫자를 택하면 현재 숫자까지 더해진 수가 더 커질 수 있다.
  // 이를 구현하기 위해 반복문을 사용한다.
  // 삼각형의 첫번째 행은 숫자가 하나밖에 없기 때문에 반복문을 돌지 않아도 된다.
  // 삼각형의 두번째 행부터 반복문을 돌면서 각 자리에 도달할 수 있는 합 중 가장 큰 합을 구해 현재 자리의 숫자를 대체한다.
  for (let i = 1; i < h; i++) {
    for (let j = 0; j <= i; j++) {
      let prev;
      if (j === 0) prev = dp[i - 1][j];
      else if (j === i) prev = dp[i - 1][j - 1];
      else prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      dp[i][j] += prev;
    }
  }

  // 마지막 행에서 가장 큰 숫자를 구하면 선택된 수의 합이 최대가 되는 경로를 구할 수 있다.
  return Math.max(...dp[h - 1]);
}

console.log(solution(h, triangle));
