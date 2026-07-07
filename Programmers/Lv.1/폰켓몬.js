const input = require("./example");

function solution(nums) {
  const varietyCount = new Set(nums).size;
  const maxCount = nums.length / 2;

  return Math.min(varietyCount, maxCount);
}

const answer = solution(input);
console.log(answer);
