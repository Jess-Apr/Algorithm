// 문제 번호: 10866번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = input.map((el) => el.split(" "));

function solution(input) {
  const deque = [];
  const console = [];

  for (let i of input) {
    [cmd, num] = i;

    switch (cmd) {
      case "push_front":
        deque.unshift(num);
        break;
      case "push_back":
        deque.push(num);
        break;
      case "pop_front":
        deque.length ? console.push(deque.shift()) : console.push(-1);
        break;
      case "pop_back":
        deque.length ? console.push(deque.pop()) : console.push(-1);
        break;
      case "size":
        console.push(deque.length);
        break;
      case "empty":
        deque.length ? console.push(0) : console.push(1);
        break;
      case "front":
        deque.length ? console.push(deque[0]) : console.push(-1);
        break;
      case "back":
        deque.length ? console.push(deque[deque.length - 1]) : console.push(-1);
        break;
    }
  }

  return console.join("\n");
}

console.log(solution(input));
