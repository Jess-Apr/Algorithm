const input = require("./example");

function solution(a, b, n) {
  let totalReceived = 0;

  while (n >= a) {
    const receivedNow = Math.floor(n / a) * b;
    totalReceived += receivedNow;
    n = (n % a) + receivedNow;
  }

  return totalReceived;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
