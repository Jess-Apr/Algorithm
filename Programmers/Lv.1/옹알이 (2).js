const input = require("./example");

function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let curIdx = 0;
    let prevWord = "";

    while (curIdx < babbling[i].length) {
      let canBabble = false;

      for (const word of words) {
        const sliced = babbling[i].slice(curIdx, curIdx + word.length);

        if (sliced === word && prevWord !== word) {
          curIdx += word.length;
          prevWord = word;
          canBabble = true;
          break;
        }
      }

      if (!canBabble) break;
    }

    if (curIdx >= babbling[i].length) answer++;
  }

  return answer;
}

const answer = solution(input);
console.log(answer);
