const input = require("./example");

function solution(a, b) {
  const monthDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let dayCount = b;
  for (let i = 1; i < a; i++) {
    dayCount += monthDay[i];
  }

  const rest = dayCount % 7;

  return weekDay[rest];
}

const answer = solution(input[0], input[1]);
console.log(answer);
