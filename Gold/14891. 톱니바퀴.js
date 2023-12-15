// 문제 번호: 14891번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const wheels = input.splice(0, 4).map((el) => el.split(""));
input.shift();
const turns = input.slice().map((el) => el.split(" ").map(Number));

function solution(turn) {
  let isTurn = [0, 0, 0, 0];

  isTurn[turn[0] - 1] = turn[1];
  for (let i = turn[0]; i < 4; i++) {
    if (isTurn[i - 1] !== 0 && wheels[i][6] !== wheels[i - 1][2]) {
      isTurn[i - 1] === 1 ? (isTurn[i] = -1) : (isTurn[i] = 1);
    }
  }
  for (let j = turn[0] - 2; j >= 0; j--) {
    if (isTurn[j + 1] !== 0 && wheels[j][2] !== wheels[j + 1][6]) {
      isTurn[j + 1] === 1 ? (isTurn[j] = -1) : (isTurn[j] = 1);
    }
  }

  for (let k = 0; k < 4; k++) {
    if (isTurn[k] === 1) {
      wheels[k].unshift(wheels[k].pop());
    } else if (isTurn[k] === -1) {
      wheels[k].push(wheels[k].shift());
    }
  }
}

for (let turn of turns) {
  solution(turn);
}

let score = 0;
for (let i = 0; i < 4; i++) {
  if (wheels[i][0] === "1") {
    score += 2 ** i;
  }
}
console.log(score);
