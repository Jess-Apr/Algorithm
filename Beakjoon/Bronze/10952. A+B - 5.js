// 문제 번호: 10952번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((n) => +n));

for (let i = 0; i < input.length - 1; i++) {
  console.log(input[i][0] + input[i][1]);
}
