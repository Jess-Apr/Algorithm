// 문제 번호: 11052번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const number = +input.shift();
const price = input[0].split(" ").map(Number);

function solution(number, price) {
  // 카드를 n장 샀을때의 최댓값을 담아줄 dp 배열 생성
  const dp = new Array(number + 1).fill(0);

  // i는 카드를 i장 샀을때의 상황을 가정
  // j는 카드를 i장 사는데 최댓값을 구하기 위해 사용 (1 + 1 + 1이 비싼지 2 + 1이 비싼지 3이 비싼지...)
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      // dp에 카드를 어떻게 샀을 때 가장 높은 가격이 나오는지 계산한다.
      // 3장을 살 때 예를 들어보면, 가장 처음은 dp[3] = Math.max(dp[3], dp[3 - 1] + price[1 - 1])이다.
      // dp[3]은 현재 값이 초기값인 0이기 때문에 2장을 샀을때의 최대값 + 1개 카드팩을 샀을때의 가격이 최대가 된다.
      // 다음은 dp[3] = Math.max(dp[3], dp[3 - 2] + price[2 - 1])
      // 2 + 1의 가격과 1장을 샀을때의 최대값 + 2개 카드팩을 샀을때의 가격을 비교해서 더 큰값을 dp[3]에 넣어준다.
      // 마지막으로 dp[3] = Math.max(dp[3], dp[3 - 3] + price[3 - 1])
      // 이전에 두 값을 비교해서 나온 최대값과 3개 카드팩만 샀을때의 가격을 비교해서 더 큰값을 dp[3]에 넣는다.
      dp[i] = Math.max(dp[i], dp[i - j] + price[j - 1]);
    }
  }

  // 이렇게 i개의 카드를 샀을때 각각의 상황별로 최대값을 구하여 1장을 더 추가해서 샀을때의 최대값을 구해나간다.
  // 따라서 dp[number]에는 카드를 number장 샀을때의 최대 가격이 담겨있다.
  return dp[number];
}

console.log(solution(number, price));
