const input = require("./example");

function solution(arr1, arr2) {
  const answer = Array.from(Array(arr1.length), () => Array(arr1[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
