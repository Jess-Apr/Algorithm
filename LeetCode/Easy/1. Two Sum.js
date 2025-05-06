const input = require("./example");

function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const requiredNum = target - nums[i];

    if (numMap.has(requiredNum)) return [i, numMap.get(requiredNum)];
    else numMap.set(nums[i], i);
  }
}

const answer = twoSum(input[0], input[1]);
console.log(answer);
