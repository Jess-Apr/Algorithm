// 문제 번호: 1931번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const meetings = input.map((el) => el.split(" ").map(Number));
meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[1];
  else return a[1] - b[1];
});

function solution(meetings) {
  const answer = [];
  answer.push(meetings[0]);

  for (let i = 1; i < meetings.length; i++) {
    if (answer[answer.length - 1][1] <= meetings[i][0]) answer.push(meetings[i]);
  }

  return answer.length;
}

console.log(solution(meetings));
