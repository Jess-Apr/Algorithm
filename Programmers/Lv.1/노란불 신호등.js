const input = require("./example");

function getGCD(a, b) {
  while (b !== 0) {
    const tmp = a;
    a = b;
    b = tmp % b;
  }

  return a;
}

function getLCM(a, b) {
  return (a * b) / getGCD(a, b);
}

function solution(signals) {
  let lcm = signals[0].reduce((acc, cur) => acc + cur);

  for (let i = 1; i < signals.length; i++) {
    const sum = signals[i].reduce((acc, cur) => acc + cur);
    lcm = getLCM(lcm, sum);
  }

  for (let j = 1; j <= lcm; j++) {
    const isAllYellow = signals.every(([g, y, r]) => {
      const yellowStart = g + 1;
      const yellowEnd = g + y;
      const rest = ((j - 1) % (g + y + r)) + 1;

      return rest >= yellowStart && rest <= yellowEnd;
    });

    if (isAllYellow) return j;
  }

  return -1;
}

const answer = solution(input);
console.log(answer);
