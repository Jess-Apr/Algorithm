const arr = require("./example");

Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};

const answer = arr.last();
console.log(answer);
