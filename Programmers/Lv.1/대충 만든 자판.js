const input = require("./example");

function solution(keymap, targets) {
  const minKeyCount = {};

  for (const key of keymap) {
    [...key].forEach((v, i) => {
      if (minKeyCount[v] === undefined) minKeyCount[v] = i + 1;
      else minKeyCount[v] = Math.min(minKeyCount[v], i + 1);
    });
  }

  return targets.map((target) => {
    let total = 0;

    for (const char of target) {
      if (minKeyCount[char] === undefined) return -1;
      total += minKeyCount[char];
    }

    return total;
  });
}

const answer = solution(input[0], input[1]);
console.log(answer);
