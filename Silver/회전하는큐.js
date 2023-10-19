// 문제 번호: 1021번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = input[0].split(" ").map((n) => +n)[0];
const arr = input[1].split(" ").map((n) => +n);

function solution(num, arr) {
  const queue = Array(num)
    .fill(0)
    .map((_, idx) => idx + 1);
  let count = 0;

  while (arr.length) {
    if (queue[0] === arr[0]) {
      queue.shift();
      arr.shift();
    } else {
      let middle = Math.floor((queue.length - 1) / 2);
      if (queue.indexOf(arr[0]) <= middle) {
        queue.push(queue.shift());
        count++;
      } else {
        queue.unshift(queue.pop());
        count++;
      }
    }
  }

  return count;
}

console.log(solution(num, arr));
