const input = require("./example");

function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  return !(x % sum);
}

const answer = solution(input);
console.log(answer);
