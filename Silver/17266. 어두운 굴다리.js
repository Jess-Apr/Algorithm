// 문제 번호: 17266번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const pos = input
  .pop()
  .split(" ")
  .map((n) => +n);
input = input.map((n) => +n);

function solution(input, pos) {
  let height = pos[0];

  for (let i = 1; i < pos.length; i++) {
    if (height < (pos[i] - pos[i - 1]) / 2) {
      height = Math.ceil((pos[i] - pos[i - 1]) / 2);
    }
  }

  const lastPos = pos.pop();
  if (height < input[0] - lastPos) {
    height = input[0] - lastPos;
  }

  return height;
}

console.log(solution(input, pos));
