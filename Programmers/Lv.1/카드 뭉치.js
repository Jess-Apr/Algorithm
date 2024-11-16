const input = require("./example");

function solution(cards1, cards2, goal) {
  let p1 = 0;
  let p2 = 0;

  for (let word of goal) {
    if (word === cards1[p1]) p1++;
    else if (word === cards2[p2]) p2++;
    else return "No";
  }

  return "Yes";
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
