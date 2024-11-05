// 문제 번호: 11399번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const queue = input.map((el) => el.split(" "))[0];

function solution(queue) {
  let time = 0;
  queue.sort((a, b) => a - b);

  for (let i = 0; i < queue.length; i++) {
    time += queue[i] * (queue.length - i);
  }

  return time;
}

console.log(solution(queue));
