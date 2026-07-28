const input = require("./example");

function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  for (const student of lost) {
    if (reserveSet.has(student)) {
      lostSet.delete(student);
      reserveSet.delete(student);
    }
  }

  for (let l of lostSet) {
    if (reserveSet.has(l - 1)) {
      lostSet.delete(l);
      reserveSet.delete(l - 1);
    } else if (reserveSet.has(l + 1)) {
      lostSet.delete(l);
      reserveSet.delete(l + 1);
    }
  }

  return n - lostSet.size;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
