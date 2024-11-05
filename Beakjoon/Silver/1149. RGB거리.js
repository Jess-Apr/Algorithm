// 문제 번호: 1149번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const houses = [...input.map((el) => el.split(" ").map(Number))];

function solution(n, houses) {
  for (let i = 1; i < n; i++) {
    houses[i][0] = houses[i][0] + Math.min(houses[i - 1][1], houses[i - 1][2]);
    houses[i][1] = houses[i][1] + Math.min(houses[i - 1][0], houses[i - 1][2]);
    houses[i][2] = houses[i][2] + Math.min(houses[i - 1][0], houses[i - 1][1]);
  }

  return Math.min(...houses[n - 1]);
}

console.log(solution(n, houses));
