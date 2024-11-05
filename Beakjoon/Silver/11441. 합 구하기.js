// 문제 번호: 11441번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[1].split(" ").map((n) => +n);
const testCase = input.slice(3).map((el) => el.split(" ").map((n) => +n));

function solution(arr, testCase) {
  const sumArr = [0];
  let sum = 0;
  const answer = [];

  for (let i of arr) {
    sum += i;
    sumArr.push(sum);
  }

  for (let i of testCase) {
    answer.push(sumArr[i[1]] - sumArr[i[0] - 1]);
  }

  return answer.join("\n");
}

console.log(solution(arr, testCase));
