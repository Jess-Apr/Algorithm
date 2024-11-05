// 문제 번호: 3036번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const rings = input[0].split(" ").map(Number);
const first = rings.shift();

function solution(ring) {
  let a = Math.max(first, ring);
  let b = Math.min(first, ring);
  let r = a % b;

  if (r === 0) {
    return `${first / b}/${ring / b}`;
  }

  while (true) {
    a = b;
    b = r;
    r = a % b;

    if (r === 0) break;
  }

  return `${first / b}/${ring / b}`;
}

for (let ring of rings) {
  console.log(solution(ring));
}
