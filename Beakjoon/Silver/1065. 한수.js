// 문제 번호: 1065번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = +input;

function solution(input) {
  let answer = 0;
  for (let i = 1; i <= input; i++) {
    if (i < 100) {
      answer++;
    } else if (i < 1000) {
      const [one, two, three] = String(i)
        .split("")
        .map((n) => +n);
      if (two - one === three - two) answer++;
    }
  }
  return answer;
}

console.log(solution(input));
