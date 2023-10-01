// 문제 번호: 13301

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const num = Number(input);

function solution(num) {
  let arr = [1, 1, 2];

  if (num === 1) {
    return 4;
  } else if (num === 2) {
    return 6;
  } else if (num === 3) {
    return 10;
  } else {
    for (let i = 3; i < num; i++) {
      arr.push(BigInt(arr[i - 1]) + BigInt(arr[i - 2]));
    }
  }

  arr.reverse();

  return String(BigInt(arr[0]) * 3n + BigInt(arr[1]) * 2n + BigInt(arr[2]) * 2n + BigInt(arr[3]));
}

console.log(solution(num));
