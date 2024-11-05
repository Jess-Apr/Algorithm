// 문제 번호: 2884번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

function solution(input) {
  if (!input[0]) input[0] = 24;

  const time = input[0] * 60 + input[1] - 45;
  if (Math.floor(time / 60) === 24) {
    input[0] = 0;
  } else {
    input[0] = input[0] = Math.floor(time / 60);
  }
  input[1] = time % 60;

  return input.join(" ");
}

console.log(solution(input));
