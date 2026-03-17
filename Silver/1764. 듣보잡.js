// 문제 번호: 1764번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const unheard = new Set(input.slice(1, n + 1));
const unseen = input.slice(n + 1);

const result = [];
for (let name of unseen) {
  if (unheard.has(name)) {
    result.push(name);
  }
}

result.sort();

console.log(result.length);
console.log(result.join("\n"));
