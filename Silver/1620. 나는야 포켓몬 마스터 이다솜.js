// 문제 번호: 1620번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const pokedex = input.slice(1, n + 1);
const test = input.slice(n + 1);

const hashVal = {};
for (let i = 0; i < n; i++) {
  hashVal[pokedex[i]] = i + 1;
}

const answer = [];
for (let t of test) {
  const regex = /^\d+$/;

  if (regex.test(t)) {
    const index = Number(t) - 1;
    answer.push(pokedex[index]);
  } else {
    answer.push(hashVal[t]);
  }
}

console.log(answer.join("\n"));
