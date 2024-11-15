const input = require("./example");

function solution(name, yearning, photo) {
  const answers = [];

  for (let p of photo) {
    const total = p.reduce((acc, cur) => {
      const score = yearning[name.indexOf(cur)] ?? 0;
      return acc + score;
    }, 0);
    answers.push(total);
  }

  return answers;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
