// 문제 번호: 14681번

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [x, y] = input;

if (x > 0) {
  console.log(y > 0 ? 1 : 4);
} else {
  console.log(y > 0 ? 2 : 3);
}
