const input = require("./example");

function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (const letter of s) {
    let idx = alphabet.indexOf(letter);
    let count = 0;

    while (count < index) {
      idx = (idx + 1) % alphabet.length;

      if (!skip.includes(alphabet[idx])) {
        count++;
      }
    }

    answer += alphabet[idx];
  }

  return answer;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
