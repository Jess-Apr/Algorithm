// 문제 번호: 17219번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ");
const memo = input.splice(0, +n).map((el) => el.split(" "));
const sites = input.slice();

function solution(memo, sites) {
  const passwords = {};
  const answer = [];

  for (let i of memo) {
    passwords[i[0]] = i[1];
  }

  for (let j of sites) {
    answer.push(passwords[j]);
  }

  return answer.join("\n");
}

console.log(solution(memo, sites));
