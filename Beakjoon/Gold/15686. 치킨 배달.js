// 문제 번호: 15686번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((el) => el.split(" ").map(Number));

const chickens = [];
const houses = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) houses.push([i, j]);
    else if (map[i][j] === 2) chickens.push([i, j]);
  }
}

function calculateMinDistance() {
  let sum = 0;

  for (let house of houses) {
    let min = Infinity;

    for (let i = 0; i < chickens.length; i++) {
      if (selected[i]) {
        const [hx, hy] = house;
        const [cx, cy] = chickens[i];
        min = Math.min(Math.abs(hx - cx) + Math.abs(hy - cy), min);
      }
    }

    sum += min;
  }

  return sum;
}

const selected = new Array(m).fill(false);
let answer = Infinity;
function dfs(idx, d) {
  if (d === m) {
    answer = Math.min(answer, calculateMinDistance());
    return;
  }

  for (let i = idx; i < chickens.length; i++) {
    if (!selected[i]) {
      selected[i] = true;
      dfs(i, d + 1);
      selected[i] = false;
    }
  }
}

dfs(0, 0);
console.log(answer);
