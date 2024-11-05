// 문제 번호: 14626번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const a = input.indexOf("*");

function calculateSum(str) {
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    const n = str[i];
    if (n === "*") continue;

    if (i % 2) {
      sum += 3 * Number(n);
    } else {
      sum += Number(n);
    }
  }

  return sum;
}

const sum = calculateSum(input);
const check = Number(input[12]);
const isOdd = a % 2 === 1;

for (let i = 0; i <= 9; i++) {
  const n = isOdd ? 3 * i : i;

  if ((sum + n + check) % 10 === 0) {
    console.log(i);
    return;
  }
}
