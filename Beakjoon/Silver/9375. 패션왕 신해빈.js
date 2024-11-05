// 문제 번호: 9375번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = +input.shift();
const testCases = [];

for (let i = 0; i < t; i++) {
  const tmp = +input.shift();
  testCases.push(input.splice(0, tmp));
}

function solution(clothes) {
  const obj = {};

  for (let c of clothes) {
    obj[c[1]] ? obj[c[1]]++ : (obj[c[1]] = 1);
  }

  const values = Object.values(obj);
  let answer = values.reduce((acc, cur) => acc * (cur + 1), 1);

  return answer - 1;
}

for (let testCase of testCases) {
  const clothes = testCase.map((el) => el.split(" "));
  console.log(solution(clothes));
}
