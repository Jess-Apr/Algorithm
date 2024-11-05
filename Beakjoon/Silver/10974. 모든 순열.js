// 문제 번호: 10974번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const number = Number(input);

function solution(number) {
  const arr = Array.from({ length: number }, (_, i) => i + 1);
  const visited = new Array(number).fill(0);
  const answer = [];

  function dfs(len, tmp) {
    if (len === number) {
      answer.push(tmp.join(" "));
    }

    for (let i of arr) {
      if (visited[i - 1]) continue;

      tmp[len] = i;
      visited[i - 1] = 1;
      dfs(len + 1, tmp);
      visited[i - 1] = 0;
    }
  }
  dfs(0, []);
  return answer.join("\n");
}

console.log(solution(number));
