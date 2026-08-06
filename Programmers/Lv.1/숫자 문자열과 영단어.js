const input = require("./example");

function solution(s) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const strings = Object.keys(numbers);
  let answer = "";
  let curIdx = 0;

  while (curIdx < s.length) {
    const first = s.slice(curIdx, curIdx + 1);

    if (!isNaN(+first)) {
      answer += first;
      curIdx += 1;
      continue;
    }

    for (const length of [3, 4, 5]) {
      const word = s.slice(curIdx, curIdx + length);

      if (strings.includes(word)) {
        answer += numbers[word];
        curIdx += length;
        break;
      }
    }
  }

  return Number(answer);
}

const answer = solution(input);
console.log(answer);
