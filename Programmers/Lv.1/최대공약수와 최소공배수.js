const input = require("./example");

function solution(n, m) {
  let a = Math.max(n, m);
  let b = Math.min(n, m);

  while (a % b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }

  const gcd = b;
  const lcm = (n * m) / b;

  return [gcd, lcm];
}

const answer = solution(input[0], input[1]);
console.log(answer);
