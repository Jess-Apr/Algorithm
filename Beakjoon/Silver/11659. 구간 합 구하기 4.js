// 문제 번호: 11659번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);
const testCases = input.slice(2).map((el) => el.split(" ").map(Number));
const sumArr = [0];

arr.forEach((v, i) => {
  sumArr[i + 1] = sumArr[i] + v;
});

const answer = [];
testCases.forEach((TC) => {
  answer.push(sumArr[TC[1]] - sumArr[TC[0] - 1]);
});

console.log(answer.join("\n"));
