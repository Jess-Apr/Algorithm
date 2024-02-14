// 문제 번호: 1759번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [l, c] = input.shift().split(" ").map(Number);
const letters = input.shift().split(" ");
letters.sort();

const answer = [];
const visited = new Array(c).fill(0);
function dfs(p, idx, depth) {
  if (depth === l) {
    let vowel = 0;
    let consonant = 0;
    for (let i = 0; i < l; i++) {
      if (["a", "e", "i", "o", "u"].includes(p[i])) consonant++;
      else vowel++;
    }

    if (vowel >= 2 && consonant >= 1) {
      answer.push(p.join(""));
    }

    return;
  }

  for (let i = idx; i < c; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    p.push(letters[i]);

    dfs(p, i + 1, depth + 1);
    p.pop();
    visited[i] = 0;
  }
}

for (let i = 0; i <= c - l; i++) {
  dfs([letters[i]], i + 1, 1);
}
console.log(answer.join("\n"));
