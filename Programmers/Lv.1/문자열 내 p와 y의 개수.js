const input = require("./example");

function solution(s) {
  const str = s.toLowerCase().split("");
  const pCount = str.filter((s) => s === "p").length;
  const yCount = str.filter((s) => s === "y").length;

  return pCount === yCount;
}

const answer = solution(input);
console.log(answer);
