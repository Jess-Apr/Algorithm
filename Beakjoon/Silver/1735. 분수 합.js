// 문제 번호: 1735번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.map((el) => el.split(" ").map(Number));

function solution(arr) {
  const [a, b] = arr;
  const numerator = a[0] * b[1] + b[0] * a[1];
  const denominator = a[1] * b[1];

  let larger = Math.max(numerator, denominator);
  let smaller = Math.min(numerator, denominator);

  while (larger % smaller) {
    const r = larger % smaller;
    larger = smaller;
    smaller = r;
  }

  return `${numerator / smaller} ${denominator / smaller}`;
}

console.log(solution(arr));
