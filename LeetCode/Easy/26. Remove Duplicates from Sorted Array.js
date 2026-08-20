const input = require("./example");

function removeDuplicates(nums) {
  const set = new Set(nums);
  const arr = Array.from(set);

  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }

  return set.size;
}

console.log(removeDuplicates(input));
