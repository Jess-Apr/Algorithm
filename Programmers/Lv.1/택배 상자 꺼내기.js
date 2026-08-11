const input = require("./example");

function solution(n, w, num) {
  const boxes = Array(w).fill(0);

  for (let i = 0; i < n; i++) {
    const row = Math.floor(i / w) + 1;
    const pos = i % w;

    if (row % 2 === 1) boxes[pos]++;
    else boxes[w - 1 - pos]++;
  }

  const boxRow = Math.ceil(num / w);
  const pos = (num - 1) % w;
  const boxPos = boxRow % 2 ? pos : w - 1 - pos;

  return boxes[boxPos] - boxRow + 1;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
