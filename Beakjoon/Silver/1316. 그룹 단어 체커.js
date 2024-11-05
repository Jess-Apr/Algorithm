// 문제 번호: 1316번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

function solution(input) {
  let count = 0;

  for (let word of input) {
    let tmp = [];
    let isGroupWord = true;
    let prevLetter = "";

    for (let j = 0; j < word.length; j++) {
      if (tmp.includes(word[j]) && prevLetter !== word[j]) {
        isGroupWord = false;
        break;
      } else if (tmp.includes(word[j]) && prevLetter === word[j]) {
        continue;
      }

      prevLetter = word[j];
      tmp.push(word[j]);
    }

    if (isGroupWord === true) count++;
  }

  return count;
}

console.log(solution(input));
