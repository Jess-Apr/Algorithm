// 문제 번호: 1296번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [name, _, ...candidates] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

candidates.sort();

let maxScore = 0;
let finalName = candidates[0];

const [l, o, v, e] = [
  name.split("L").length - 1,
  name.split("O").length - 1,
  name.split("V").length - 1,
  name.split("E").length - 1,
];

for (let c of candidates) {
  const L = l + c.split("L").length - 1;
  const O = o + c.split("O").length - 1;
  const V = v + c.split("V").length - 1;
  const E = e + c.split("E").length - 1;

  const score =
    ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;

  if (score > maxScore) {
    maxScore = score;
    finalName = c;
  }
}

console.log(finalName);
