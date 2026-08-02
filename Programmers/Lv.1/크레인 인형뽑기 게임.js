const input = require("./example");

function solution(board, moves) {
  let answer = 0;
  const basket = [];

  for (const move of moves) {
    const col = move - 1;

    for (let row = 0; row < board.length; row++) {
      const doll = board[row][col];

      if (doll === 0) continue;

      board[row][col] = 0;

      if (doll === basket[basket.length - 1]) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }

      break;
    }
  }

  return answer;
}

const answer = solution(input[0], input[1]);
console.log(answer);
