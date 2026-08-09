const input = require("./example");

function solution(lottos, win_nums) {
  const matchCount = lottos.filter((num) => win_nums.includes(num)).length;
  const zeroCount = lottos.filter((num) => num === 0).length;

  const rank = (count) => Math.min(7 - count, 6);

  return [rank(matchCount + zeroCount), rank(matchCount)];
}

const answer = solution(input[0], input[1]);
console.log(answer);
