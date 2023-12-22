// 문제 번호: 2447번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = +input;

// 별과 공백을 담아줄 배열
const answer = [];

// 이중 반복문을 돌면서 별과 공백을 담아준다.
// i는 열(세로)을 의미하고 j는 행(가로)을 의미한다.
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    solution(i, j);
  }

  // 하나의 행이 끝날때마다 줄바꿈을 넣어준다.
  // 마지막 열이 끝나면 줄바꿈은 필요 없으므로 넣지 않는다.
  if (i !== n - 1) answer.push("\n");
}

// 별과 공백을 넣어주는 식
function solution(i, j) {
  // 별이 9개인 3*3 패턴에서는 5번 자리에 공백이 들어가야한다.
  // (1, 1), (1, 4), (1, 7), (4, 1) ... 순으로 빈칸이 들어가야 하기 때문에 둘을 3으로 나누면 전부 나머지가 1이다.
  // 따라서 i와 j를 3으로 나눴을 때 둘 다 나머지가 1이라면 공백을 넣어준다.
  if (i % 3 === 1 && j % 3 === 1) {
    answer.push(" ");
  } else {
    // i와 j를 3으로 나눠서 내림했을때 둘다 0이라면 별을 넣어준다.
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      answer.push("*");
    } else {
      // 위의 두 조건에 맞지 않는다면 i와 j를 3으로 나눠서 다시 재귀함수를 호출한다.
      // 만약 i와 j가 가장 중간의 정사각형 영역에 위치한 경우, 두 수는 3^x <= i, j < 3^x + 3^x이다.
      // 위에서 x는, n이 3의 제곱수일 때 3 * 3^x = n을 만드는 수를 의미한다.
      // 즉, n이 9일 경우 3 * 3^1 (x = 1)이므로 3^1 <= i, j < 3^1 + 3^1 인 것이다.
      // 그래서 3으로 계속 나눌 경우 두 수의 내림값이 전부 1이 되는 순간이 무조건 오기 때문에 중간의 정사각형 영역은 공백으로 채워지게 된다.
      // 정사각형 영역도 아니고 3*3 패턴에서 공백이 들어가는 5번 자리도 아닐 경우, 3으로 수를 나누어서 내림하다보면 0에 도달하기 때문에 별이 채워진다.
      solution(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

console.log(answer.join(""));
