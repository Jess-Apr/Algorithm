const input = require("./example");

function solution(s, n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const answer = [];

  for (let letter of s) {
    if (letter === " ") {
      answer.push(" ");
      continue;
    }

    const lower = letter.toLowerCase();
    const idx = alphabet.indexOf(lower);
    const nextIdx = (idx + n) % 26;
    const nextLetter =
      lower === letter ? alphabet[nextIdx] : alphabet[nextIdx].toUpperCase();

    answer.push(nextLetter);
  }

  return answer.join("");
}

const answer = solution(input[0], input[1]);
console.log(answer);
