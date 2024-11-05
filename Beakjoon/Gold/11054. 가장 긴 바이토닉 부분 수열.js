// 문제 번호: 11054번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = input[0].split(" ").map(Number);

function solution(n, arr) {
  // 바이토닉 수열은 증가하는 부분과 감소하는 부분이 있기 때문에 두 부분을 구분해서 추적해야한다.
  const increaseDP = new Array(n).fill(0);
  const decreaseDP = new Array(n).fill(0);

  // 가장 긴 증가하는 수열 탐색
  for (let i = 0; i < n; i++) {
    let max = 0;

    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        max = Math.max(increaseDP[j], max);
      }
    }

    increaseDP[i] = max + 1;
  }

  // 가장 긴 감소하는 수열 탐색
  // 증가하는 수열과 똑같이 앞에서부터 시작해버리면, 감소하는 수열의 끝점을 찾는것이 되어버리므로 제대로 된 답을 내지 못한다.
  // 감소하는 수열의 처음부터 시작해야하기 때문에 뒤에서부터 탐색을 시작한다.
  for (let i = n - 1; i >= 0; i--) {
    let max = 0;

    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        max = Math.max(decreaseDP[j], max);
      }
    }

    decreaseDP[i] = max + 1;
  }

  return Math.max(...increaseDP.map((el, idx) => el + decreaseDP[idx])) - 1;
}

console.log(solution(n, arr));
