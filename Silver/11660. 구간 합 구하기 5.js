// 문제 번호: 11660번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const table = input.splice(0, n).map((el) => el.split(" ").map(Number));

const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    // 각 인덱스를 기준으로 1,1(= 0,0)에서부터 해당 인덱스까지의 누적합을 구한다.
    // 누적합은 (현재 행보다 하나 작은 행의 누적합 + 현재 열보다 하나 작은 열의 누적합 - 두번 더해진 부분)으로 구할 수 있다. (아래쪽 참고)
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + table[i - 1][j - 1];
  }
}

// 테스트케이스마다 console.log로 출력하면 시간 초과 오류가 발생해서 배열에 담은 후 join하여 출력
let answer = [];
for (let k = 0; k < input.length; k++) {
  const [x1, y1, x2, y2] = input[k].split(" ").map(Number);

  // (x1, y1)부터 (x2, y2)까지의 누적합은 반대로 하면 된다.
  // ((1, 1)부터 (x2, y2)까지의 누적합) - ((1, 1)부터 (x1 - 1, y2)까지의 누적합) - ((1, 1)부터 (x2, y1 - 1)까지의 누적합) + 두번 빠진 부분으로 구할 수 있다. (아래쪽 참고)
  answer.push(dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1]) + dp[x1 - 1][y1 - 1]);
}
console.log(answer.join("\n"));

// 1 2 3
// 2 3 4
// 4 5 6
// 위와 같은표가 있을 때, (2, 2) 위치의 누적합을 구하는 방법은 다음과 같다.
// (1, 2)까지의 누적합 + (2, 1)까지의 누적합 - (1, 1)까지의 누적합
// (1 + 2) + (1 + 2) - (1) = 8
// (1, 1)까지의 누적합이 겹쳐지는 부분으로, 두번 더해지기 때문에 한번 빼주는 것이다.

// 1 3 6
// 3 8 15
// 7 17 30
// 위 예제의 누적합을 구한 것이다. 여기서 (2, 2)부터 (3, 3)까지의 누적합을 구하는 법은 다음과 같다.
// (3, 3)까지의 누적합 - (1, 3)까지의 누적합 - (3, 1)까지의 누적합 + (1, 1)까지의 누적합
// 30 - 6 - 7 + 1 = 18
// 30 - (1 + 2 + 3) - (1 + 2 + 4)이기 때문에 중복으로 빠진 1을 더해주는 것이다.
