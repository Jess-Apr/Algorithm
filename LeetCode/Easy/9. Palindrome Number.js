const input = require("./example");

function isPalindrome(x) {
  if (x === 0) return true;
  if (x < 0 || !(x % 10)) return false;

  let left = x;
  let right = 0;

  while (right < left) {
    right = right * 10 + (left % 10);
    left = Math.floor(left / 10);
  }

  return left === right || left === Math.floor(right / 10);
}

const answer = isPalindrome(input);
console.log(answer);
