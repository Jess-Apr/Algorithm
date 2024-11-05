// 문제 번호: 2609번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

function solution(n, m) {
  let larger = Math.min(n, m);
  let gcd = Math.max(n, m) % Math.min(n, m);
  let lcm = 0;

  if (!gcd) {
    gcd = larger;
  }

  while (gcd) {
    if (larger % gcd === 0) {
      break;
    } else {
      const tmp = gcd;
      gcd = larger % gcd;
      larger = tmp;
    }
  }

  lcm = (n * m) / gcd;

  return [gcd, lcm].join("\n");
}

console.log(solution(...input));
