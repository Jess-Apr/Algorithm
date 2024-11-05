// 문제 번호: 10818번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = input.map((el) => el.split(" ").map((n) => +n))[0];

function solution(input) {
  const answer = [Math.min(...input), Math.max(...input)];
  return answer.join(" ");
}

console.log(solution(input));
