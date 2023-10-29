// 문제 번호: 10845번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = input.map((el) => el.split(" "));

function solution(input) {
  const queue = [];
  const console = [];

  for (let i of input) {
    const [n, m] = i;

    switch (n) {
      case "push":
        queue.push(m);
        break;
      case "pop":
        queue.length ? console.push(queue.shift()) : console.push(-1);
        break;
      case "size":
        console.push(queue.length);
        break;
      case "empty":
        queue.length ? console.push(0) : console.push(1);
        break;
      case "front":
        queue.length ? console.push(queue[0]) : console.push(-1);
        break;
      case "back":
        queue.length ? console.push(queue[queue.length - 1]) : console.push(-1);
        break;
    }
  }

  return console.join("\n");
}

console.log(solution(input));
