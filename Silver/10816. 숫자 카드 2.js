// 문제 번호: 10816번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[3].split(" ").map(Number);

function solution(arr1, arr2) {
  let obj = {};
  let answer = [];
  for (let i of arr1) {
    obj[i] = (obj[i] | 0) + 1;
  }

  for (let j of arr2) {
    obj[j] ? answer.push(obj[j]) : answer.push(0);
  }

  return answer.join(" ");
}

console.log(solution(arr1, arr2));
