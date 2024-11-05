const dots = require("./example.js");

function getSlope(c1, c2) {
  return (c2[1] - c1[1]) / (c2[0] - c1[0]);
}

function solution(dots) {
  const [a, b, c, d] = dots;
  const isParallel =
    getSlope(a, b) === getSlope(c, d) ||
    getSlope(a, c) === getSlope(b, d) ||
    getSlope(a, d) === getSlope(b, c);
  return isParallel ? 1 : 0;
}

const answer = solution(dots);
console.log(answer);
