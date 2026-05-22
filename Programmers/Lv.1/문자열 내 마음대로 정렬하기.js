const input = require("./example");

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;

    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
  });
}

const answer = solution(input[0], input[1]);
console.log(answer);
