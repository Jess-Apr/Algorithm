// 문제 번호: 14503번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
let [r, c, d] = input.shift().split(" ").map(Number);
const room = input.map((el) => el.split(" ").map(Number));

// 청소기가 청소한 칸의 개수
let answer = 0;
// 청소기가 다음에 이동해야 할 위치를 담은 배열
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
// 청소기 주변 4칸 중 청소된 칸의 개수
let cleaned = 0;

while (true) {
  // 만약 청소기 주변의 4칸이 모두 청소가 된 상태라면
  if (cleaned === 4) {
    // 청소기의 뒷 방향을 구해 현재 좌표에서 더해준다.
    const [backR, backC] = [r + dr[(d + 6) % 4], c + dc[(d + 6) % 4]];
    // 청소기의 뒤가 벽이라면 청소를 중단한다.
    if (room[backR][backC] === 1) {
      break;
    } else {
      // 청소기의 뒤가 벽이 아니라면 바라본 방향 그대로 한칸 후진한다.
      // 새로 이동한 칸 기준으로 주변 4칸 중 몇칸이 청소되었는지는 이동한 다음에 다시 판단한다.
      r = backR;
      c = backC;
      cleaned = 0;
    }
  }

  // 이동한 칸이 청소가 되어있지 않은 상태라면 체크해준다.
  // 벽과 구분하기 위해 1이 아닌 2로 값을 변경
  // 청소한 칸의 개수를 1 늘린다.
  if (!room[r][c]) {
    room[r][c] = 2;
    answer++;
  }

  // 청소 후 다음 청소할 칸으로 옮기기 위해 청소기의 왼쪽 칸의 좌표를 구한다.
  const [leftR, leftC] = [r + dr[(d + 3) % 4], c + dc[(d + 3) % 4]];
  // 청소기의 왼쪽 칸이 청소가 안되어있다면 왼쪽칸으로 한칸 옮긴다.
  // 주변에 청소된 칸의 개수는 초기화시켜준다.
  if (room[leftR][leftC] === 0) {
    r = leftR;
    c = leftC;
    cleaned = 0;
  } else {
    // 청소기의 왼쪽 칸이 청소가 되어있다면 청소된 칸의 개수를 1 늘린다.
    // 청소된 칸이 4칸이 되었다면 다음 반복문에서 뒷 방향으로 이동
    // 4칸이 되지 않았다면 다음 반복문에서 다시 이 조건문으로 돌아와 청소기의 왼쪽 칸이 청소되었는지 판단
    cleaned++;
  }

  // 청소기의 방향을 반시계 방향으로 90도 돌린다.
  // 청소기가 후진을 했다면 주변에 청소한 칸을 파악하기 위해 반시계 방향으로 90도 회전해야한다.
  // 후진해서 이동한 칸에서도 주변 4칸이 모두 청소되어있다면 원래 바라보던 방향을 마지막으로 파악하기 때문에 그 방향 그대로 한칸 더 후진한다.
  // 후진해서 이동한 칸에서 주변 4칸 중 청소되지 않은 칸이 있다면 반시계 방향으로 90도 회전하여 가장 처음 본 청소되지 않은 칸으로 이동한다.
  d = (d + 3) % 4;
}

console.log(answer);
