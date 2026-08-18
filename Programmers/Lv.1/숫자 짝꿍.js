const input = require("./example");

function solution(X, Y) {
  const xCount = Array(10).fill(0);
  const yCount = Array(10).fill(0);

  for (const x of X) {
    xCount[x]++;
  }

  for (const y of Y) {
    yCount[y]++;
  }

  let answer = "";

  for (let i = 9; i >= 0; i--) {
    const count = Math.min(xCount[i], yCount[i]);
    answer += String(i).repeat(count);
  }

  if (answer === "") return "-1";
  if (answer[0] === "0") return "0";
  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
