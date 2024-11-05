// 문제 번호: 2003번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const total = +input.shift().split(" ")[1];
const arr = input[0].split(" ").map(Number);

function solution(total, arr) {
  let count = 0;
  let i = 0;
  let j = 0;
  let sum = arr[i];

  while (i <= j) {
    if (j >= arr.length) break;
    if (sum > total && i === j) {
      j++;
      sum += arr[j];
    }

    if (sum === total) {
      count++;
      j++;
      sum += arr[j];
    } else if (sum > total) {
      sum -= arr[i];
      i++;
    } else if (sum < total) {
      j++;
      sum += arr[j];
    }
  }

  return count;
}

console.log(solution(total, arr));
