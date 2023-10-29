// 문제 번호: 10250번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCase = Number(input.shift());
input = input.map((el) => el.split(" ").map((n) => +n));

function solution(testCase, input) {
  const answer = [];

  for (let i = 0; i < testCase; i++) {
    let rm = [];

    if (input[i][2] % input[i][0] === 0) {
      rm.push(input[i][0]);
    } else {
      rm.push(input[i][2] % input[i][0]);
    }

    if (Math.ceil(input[i][2] / input[i][0]) < 10) {
      rm.push(0);
    }
    rm.push(Math.ceil(input[i][2] / input[i][0]));

    answer.push(rm.join(""));
  }

  return answer.join("\n");
}

console.log(solution(testCase, input));
