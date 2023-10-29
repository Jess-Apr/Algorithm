// 문제 번호: 10867번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const numbers = input.map((el) => el.split(" ").map((n) => +n))[0];

function solution(numbers) {
  let answer = [];

  for (let i of numbers) {
    if (!answer.includes(i)) answer.push(i);
  }

  return answer.sort((a, b) => a - b).join(" ");
}

console.log(solution(numbers));
