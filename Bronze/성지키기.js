// 문제 번호: 1236

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input
  .shift()
  .split(" ")
  .map((n) => Number(n));
const data = input.map((el) => el.split(""));

function solution(arr, data) {
  let fullRow = new Array(arr[0]).fill(0);
  let fullCol = new Array(arr[1]).fill(0);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === "X") {
        if (fullRow[i] === 0) fullRow[i] = 1;
        if (fullCol[j] === 0) fullCol[j] = 1;
      }
    }
  }

  let emptyRowCount = 0;
  let emptyColCount = 0;

  for (let i of fullRow) {
    if (i === 0) emptyRowCount += 1;
  }

  for (let i of fullCol) {
    if (i === 0) emptyColCount += 1;
  }

  return Math.max(emptyRowCount, emptyColCount);
}

console.log(solution(arr, data));
