// 문제 번호: 10809번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const answer = [];

  for (let i = 0; i < alphabet.length; i++) {
    answer.push(input.indexOf(alphabet[i]));
  }

  return answer.join(" ");
}

console.log(solution(input));
