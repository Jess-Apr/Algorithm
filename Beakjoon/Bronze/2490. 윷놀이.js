// 문제 번호: 2490번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCases = input.map((t) => t.split(" ").map(Number));

const values = ["D", "C", "B", "A", "E"];
for (let test of testCases) {
  const count = test.reduce((acc, cur) => acc + cur);
  console.log(values[count]);
}
