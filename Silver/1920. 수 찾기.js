// 문제 번호: 1920번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[1]
  .split(" ")
  .map((n) => +n)
  .sort((a, b) => a - b);
const m = input[3].split(" ").map((n) => +n);

function binary(n, num) {
  let min = 0;
  let max = n.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (n[middle] === num) {
      return 1;
    } else if (n[middle] < num) {
      min = middle + 1;
    } else if (n[middle] > num) {
      max = middle - 1;
    }
  }

  return 0;
}

let answer = m.map((num) => binary(n, num));

console.log(answer.join("\n"));
