// 문제 번호: 1074번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, r, c] = input.shift().split(" ").map(Number);

let answer = 0;
function recursion(y, x, cur) {
  if (cur === 0) {
    console.log(answer);
    return;
  }

  const half = 2 ** (cur - 1) / 2;

  if (r < y && c < x) {
    recursion(y - half, x - half, cur - 1);
  } else if (r < y && c >= x) {
    answer += 4 ** (cur - 1);
    recursion(y - half, x + half, cur - 1);
  } else if (r >= y && c < x) {
    answer += 4 ** (cur - 1) * 2;
    recursion(y + half, x - half, cur - 1);
  } else if (r >= y && c >= x) {
    answer += 4 ** (cur - 1) * 3;
    recursion(y + half, x + half, cur - 1);
  }
}

recursion(2 ** n / 2, 2 ** n / 2, n);
