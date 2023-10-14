// 문제 번호: 20291번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const data = input.map((el) => el.split("."));

function solution(data) {
  const obj = {};

  for (let i of data) {
    obj[i[1]] = obj[i[1]] ? ++obj[i[1]] : 1;
  }

  let arr = Object.entries(obj);
  arr.sort();
  arr = arr.map((el) => el.join(" "));

  return arr.join("\n");
}

console.log(solution(data));
