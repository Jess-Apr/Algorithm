const input = require("./example");

function solution(sizes) {
  const width = [];
  const height = [];

  for (let size of sizes) {
    width.push(Math.max(...size));
    height.push(Math.min(...size));
  }

  return Math.max(...width) * Math.max(...height);
}

const answer = solution(input);
console.log(answer);
