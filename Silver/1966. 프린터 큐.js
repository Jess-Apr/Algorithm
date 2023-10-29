// 문제 번호: 1966번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = input.map((el) => el.split(" ").map((n) => +n));

function solution(n, m) {
  let idx = n[1];
  let printed = 0;

  while (m.length > 0) {
    if (idx === 0 && Math.max(...m) === m[0]) {
      printed++;
      break;
    }

    if (idx !== 0) {
      idx--;
    } else {
      idx = m.length - 1;
    }

    if (m[0] === Math.max(...m)) {
      m.shift();
      printed++;
    } else {
      const shift = m.shift();
      m.push(shift);
    }
  }

  return printed;
}

for (let i = 0; i < input.length; i += 2) {
  console.log(solution(input[i], input[i + 1]));
}
