const input = require("./example");

function solution(d, budget) {
  d.sort((a, b) => a - b);

  let answer = 0;
  let curSum = 0;

  for (let price of d) {
    if (curSum + price > budget) break;

    curSum += price;
    answer++;
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
