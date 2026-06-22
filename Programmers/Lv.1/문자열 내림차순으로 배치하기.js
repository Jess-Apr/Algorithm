const input = require("./example");

function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      if (a === b) return 0;
      if (a < b) return 1;
    })
    .join("");
}

const answer = solution(input);
console.log(answer);
