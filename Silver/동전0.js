// 문제 번호: 11047번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const value = +input[0].split(" ")[1];
input.shift();
const coins = input.map(Number);

function solution(value, coins) {
  let count = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    while (value >= coins[i]) {
      value -= coins[i];
      count++;
    }
  }
  return count;
}

console.log(solution(value, coins));
