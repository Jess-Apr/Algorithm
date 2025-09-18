const input = require("./example");

const ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, cur) => acc + cur, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums}]`;
};

const obj1 = new ArrayWrapper(input[0]);
const obj2 = new ArrayWrapper(input[1]);
console.log(obj1 + obj2);
console.log(String(obj1));
console.log(String(obj2));
