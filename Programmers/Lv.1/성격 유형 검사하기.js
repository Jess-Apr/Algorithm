const input = require("./example");

function solution(survey, choices) {
  const scores = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const choice = choices[i];

    if (choice < 4) {
      scores[survey[i][0]] += 4 - choice;
    } else if (choice > 4) {
      scores[survey[i][1]] += choice - 4;
    }
  }

  let answer = "";
  for (const [first, second] of ["RT", "CF", "JM", "AN"]) {
    answer += scores[first] >= scores[second] ? first : second;
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
