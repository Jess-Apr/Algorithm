// 문제 번호: 2292번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
let n = Number(input);

let range = 1;
let level = 1;

while (n > range) {
  range += 6 * level;
  level++;
}

console.log(level);
