// 문제 번호: 9251번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split("\n");
const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));

// 단어 두개를 한꺼번에 비교하는 것이 아니라, 단어의 한 글자씩 늘려가면서 비교를 한다.
// 단어 a의 첫번째 글자와 단어 b의 첫번째 글자를 비교하고, 그 다음에 단어 a의 첫번째 글자와 단어 b의 두번째 글자를 비교하고..
// 단어 a의 마지막 글자와 단어 b의 마지막 글자를 비교할때까지 반복한다.
for (let i = 1; i <= a.length; i++) {
  for (let j = 1; j <= b.length; j++) {
    // 두 단어의 첫번째 글자를 비교할 때도 참조할 숫자가 존재하도록 dp 배열은 a.length + 1, b.length + 1로 만들어주었다.
    // 따라서 단어 a의 i - 1번째 글자와 단어 b의 j - 1번째 글자를 비교할 때는 dp[i][j]를 채워주면 된다.
    // 단어 a의 i - 1번째 글자와 단어 b의 j - 1번째 글자가 같다면 dp[i - 1][j - 1]의 최장 공통 부분 수열에서 하나를 더해주면 된다. (* 참고)
    // 단어 a의 i - 1번째 글자와 단어 b의 j - 1번째 글자가 다르다면 dp[i - 1][j]와 dp[i][j - 1] 중 더 긴 최장 공통 부분 수열의 값을 가져온다. (** 참고)
    if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

console.log(dp[a.length][b.length]);

// 단어 a = ACAYKP, 단어 b = CAPCAK

// * 단어 a의 3번째 글자와 단어 b의 5번째 글자 비교
// AC'A'와 CAPC'A'이므로 글자가 같다.
// AC와 CAPC의 최장 공통 부분 수얼에서 A만 더해주면 되므로 dp[i - 1][j - 1] + 1을 해주면 된다.

// ** 단어 a와 4번째 글자와 단어 b의 5번째 글자 비교
// ACA'Y'와 CAPC'A' 이므로 글자가 다르다.
// ACA와 CAPCA의 최장 공통 부분 수열과 ACAY와 CAPC의 최장 공통 부분 수열을 비교한다.
// 3 > 2 이므로 dp[[i][j]는 3이다.
