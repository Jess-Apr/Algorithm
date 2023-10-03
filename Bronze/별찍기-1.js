// 문제 번호: 2438번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = +input;

for (let i = 1; i <= input; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  console.log(str);
}
