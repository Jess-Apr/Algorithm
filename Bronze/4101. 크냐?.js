// 문제 번호: 4101번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
const testCases = input.map((el) => el.split(" ").map(Number));

testCases.forEach((a) => console.log(a[0] > a[1] ? "Yes" : "No"));
