const input = require("./example");

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      const pattern = patterns[j];

      if (answers[i] === pattern[i % pattern.length]) {
        scores[j]++;
      }
    }
  }

  const maxScore = Math.max(...scores);
  const result = [];
  scores.forEach((score, idx) => {
    if (score === maxScore) result.push(idx + 1);
  });

  return result;
}

const answer = solution(input);
console.log(answer);
