// 문제 번호: 10814번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const users = input.slice(1).map((el) => el.split(" "));
for (let i of users) {
  i[0] = Number(i[0]);
}

function solution(users) {
  users.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] === b[0]) {
      return 0;
    } else {
      return -1;
    }
  });

  return users.map((el) => el.join(" ")).join("\n");
}

console.log(solution(users));
