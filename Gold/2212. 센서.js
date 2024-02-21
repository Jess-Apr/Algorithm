// 문제 번호: 2212번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const k = +input.shift();
const s = input.shift().split(" ").map(Number);
// 센서들 사이의 거리를 구하기 위해 오름차순 정렬
s.sort((a, b) => a - b);

// 센서들 사이의 거리를 [센서 위치, 거리 격차] 형식으로 담아준다.
const d = [];
for (let i = 0; i < n - 1; i++) {
  d.push([i, s[i + 1] - s[i]]);
}

// 거리 격차를 기준으로 내림차순으로 정렬해준 후, (집중국의 개수 - 1)개까지 잘라준다.
// 거리 격차가 큰 순으로 집중국의 범위를 나누어주기 위함이다.
// (집중국의 개수 - 1)개까지로 자르는 이유는 집중국의 개수가 n이라면 범위들의 경계선은 n - 1개이기 때문이다.
const arr = [...d]
  .sort((a, b) => b[1] - a[1])
  .slice(0, k - 1)
  .sort((a, b) => a[0] - b[0]);
// 마지막 범위까지 더해주기 위해 [마지막 인덱스, 의미없는 숫자]를 arr에 푸시해준다.
arr.push([n - 1, 0]);

let index = 0;
let start = 0;
let answer = 0;
while (index < arr.length) {
  // arr에는 집중국의 범위가 나눠져야 하는 위치가 저장되어있음.
  // 해당 위치 전까지 거리를 더해주고, 해당 위치에서는 거리를 더해주지 않고 건너뜀으로써 범위를 나눠줌.
  const [end] = arr[index++];
  for (let i = start; i < end; i++) {
    answer += d[i][1];
  }

  // end 위치에서는 거리를 더해주지 않고 +1을 해서 건너뛴다.
  start = end + 1;
}

console.log(answer);
