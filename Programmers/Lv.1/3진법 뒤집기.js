const input = require("./example");

function solution(n) {
  const ternary = n.toString(3);
  const reversed = ternary.split("").reverse().join("");
  const decimal = parseInt(reversed, 3);

  return decimal;
}

const answer = solution(input);
console.log(answer);
