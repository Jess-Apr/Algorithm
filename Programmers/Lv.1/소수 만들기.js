const input = require("./example");

function solution(nums) {
  let answer = 0;
  const len = nums.length;

  const isPrime = (number) => {
    if (number < 2) return false;

    for (let divisor = 2; divisor * divisor <= number; divisor++) {
      if (number % divisor === 0) return false;
    }

    return true;
  };

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }

  return answer;
}

const answer = solution(input);
console.log(answer);
