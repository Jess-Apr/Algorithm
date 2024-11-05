// 문제 번호: 10871번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = +input[0].split(" ")[1];
const arr = input[1].split(" ").map((n) => +n);

function solution(num, arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) answer.push(arr[i]);
  }

  return answer.join(" ");
}

console.log(solution(num, arr));
