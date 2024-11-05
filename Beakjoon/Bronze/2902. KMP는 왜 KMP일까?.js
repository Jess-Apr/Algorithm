// 문제 번호: 2902번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const names = input.split("-");
let shortened = "";

for (n of names) {
  shortened += n[0];
}

console.log(shortened);
