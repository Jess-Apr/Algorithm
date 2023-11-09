// 문제 번호: 2941번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let word = input.split("");
  let count = 0;

  while (word.length > 0) {
    if (
      word[1] === "=" ||
      word[1] === "-" ||
      ((word[0] === "l" || word[0] === "n") && word[1] === "j")
    ) {
      word.splice(0, 2);
      count++;
    } else if (word.slice(0, 3).join("") === "dz=") {
      word.splice(0, 3);
      count++;
    } else {
      word.shift();
      count++;
    }
  }

  return count;
}

console.log(solution(input));
