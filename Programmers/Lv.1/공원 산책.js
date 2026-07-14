const input = require("./example");

function solution(park, routes) {
  const h = park.length;
  const w = park[0].length;

  let y;
  let x;

  for (let i = 0; i < h; i++) {
    const index = park[i].indexOf("S");

    if (index !== -1) {
      y = i;
      x = index;
      break;
    }
  }

  const direction = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  for (let route of routes) {
    const [op, distance] = route.split(" ");
    const n = Number(distance);
    const [dy, dx] = direction[op];
    let canMove = true;

    for (let j = 1; j <= n; j++) {
      const ny = y + dy * j;
      const nx = x + dx * j;

      if (ny < 0 || ny >= h || nx < 0 || nx >= w || park[ny][nx] === "X") {
        canMove = false;
        break;
      }
    }

    if (canMove) {
      y += dy * n;
      x += dx * n;
    }
  }

  return [y, x];
}

const answer = solution(input[0], input[1]);
console.log(answer);
