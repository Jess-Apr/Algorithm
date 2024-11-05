// 문제 번호: 17413번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const arr = [];
  let count = 0;
  let prev = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "<") {
      if (i !== 0 && input[i - 1] !== ">") arr.push(input.slice(count, i));

      count = i;
      prev = "<";
    } else if (
      (i === 0 && input[0] !== "<") ||
      (prev !== "<" && input[i - 1] === " ") ||
      input[i - 1] === ">"
    ) {
      count = i;
      prev = "str";
    } else if (input[i] === ">") {
      arr.push(input.slice(count, i + 1));
    } else if (prev === "str" && input[i] === " ") {
      arr.push(input.slice(count, i));
      arr.push(input.slice(i, i + 1));
    } else if (i === input.length - 1) {
      arr.push(input.slice(count));
    } else {
      continue;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] !== "<" && arr[i] !== " ") {
      arr[i] = arr[i].split("").reverse().join("");
    }
  }

  return arr.join("");
}

console.log(solution(input));
