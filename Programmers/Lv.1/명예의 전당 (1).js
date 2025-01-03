const input = require("./example");

function solution(k, score) {
  const answer = [];
  const ranking = [];

  for (let s of score) {
    ranking.push(s);
    ranking.sort((a, b) => b - a);

    if (ranking.length > k) {
      ranking.pop();
    }
    answer.push(ranking[ranking.length - 1]);
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
