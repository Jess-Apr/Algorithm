const input = require("./example");

function solution(wallpaper) {
  let lux = Infinity;
  let luy = Infinity;
  let rdx = -Infinity;
  let rdy = -Infinity;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        lux = Math.min(i, lux);
        luy = Math.min(j, luy);
        rdx = Math.max(i + 1, rdx);
        rdy = Math.max(j + 1, rdy);
      }
    }
  }

  return [lux, luy, rdx, rdy];
}

const answer = solution(input);
console.log(answer);
