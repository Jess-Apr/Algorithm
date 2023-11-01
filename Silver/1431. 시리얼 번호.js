// 문제 번호: 1431번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

function solution(input) {
  input.sort((a, b) => {
    let sum1 = a.split("").filter((el) => !isNaN(+el));

    if (sum1.length !== 0) {
      sum1 = sum1.map(Number).reduce((acc, cur) => acc + cur);
    } else {
      sum1 = 0;
    }

    let sum2 = b.split("").filter((el) => !isNaN(+el));

    if (sum2.length !== 0) {
      sum2 = sum2.map(Number).reduce((acc, cur) => acc + cur);
    } else {
      sum2 = 0;
    }

    if (a.length - b.length > 0) {
      return 1;
    } else if (a.length - b.length === 0) {
      if (sum1 - sum2 > 0) {
        return 1;
      } else if (sum1 - sum2 === 0) {
        if (a > b) {
          return 1;
        } else if (a === b) {
          return 0;
        } else {
          return -1;
        }
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });

  return input.join("\n");
}

console.log(solution(input));
