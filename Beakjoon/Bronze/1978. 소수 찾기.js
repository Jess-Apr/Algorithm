// 문제 번호: 1978번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const nums = input[1].split(" ").map(Number);

function solution(nums) {
  let count = 0;

  for (let i of nums) {
    let isPrime = 1;
    if (i === 1) isPrime = 0;

    for (let j = 2; j <= i / 2; j++) {
      if (!(i % j)) isPrime = 0;
    }

    count += isPrime;
  }

  return count;
}

console.log(solution(nums));
