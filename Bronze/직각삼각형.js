// 문제 번호: 1259번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
input = input.map((el) => el.split(" ").map((n) => +n));

function solution(data) {
  let answer = "wrong";
  data.sort((a, b) => b - a);
  if (data[0] ** 2 === data[1] ** 2 + data[2] ** 2) {
    answer = "right";
  }
  return answer;
}

for (let i of input) {
  console.log(solution(i));
}
