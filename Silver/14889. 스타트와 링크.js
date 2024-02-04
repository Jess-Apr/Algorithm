// 문제 번호: 14889번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const s = input.map((el) => el.split(" ").map(Number));

let min = Infinity;
const visited = new Array(n).fill(0);

function dfs(depth, cur) {
  if (depth === n / 2) {
    const ft = [];
    const st = [];

    for (let i = 0; i < n; i++) {
      visited[i] ? ft.push(i) : st.push(i);
    }

    let s1 = 0;
    let s2 = 0;
    for (let j = 0; j < n / 2 - 1; j++) {
      for (let k = j; k < n / 2; k++) {
        s1 = s1 + s[ft[j]][ft[k]] + s[ft[k]][ft[j]];
        s2 = s2 + s[st[j]][st[k]] + s[st[k]][st[j]];
      }
    }

    min = Math.min(min, Math.abs(s1 - s2));
    return;
  }

  for (let k = cur; k < n; k++) {
    if (visited[k]) {
      continue;
    } else {
      visited[k] = 1;
      dfs(depth + 1, k + 1);
      visited[k] = 0;
    }
  }
}

dfs(0, 0);
console.log(min);
