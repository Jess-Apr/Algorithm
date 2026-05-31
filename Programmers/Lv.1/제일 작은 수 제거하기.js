const input = require("./example");

function solution(arr) {
  const smallest = Math.min(...arr);
  const newArr = arr.filter((num) => num !== smallest);
  return newArr.length ? newArr : [-1];
}

const answer = solution(input);
console.log(answer);
