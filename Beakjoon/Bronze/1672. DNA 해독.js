// 문제 번호: 1672번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const dna = input[1];

const dnaOrder = { A: 0, G: 1, C: 2, T: 3 };
const dnaTable = [
  ["A", "C", "A", "G"],
  ["C", "G", "T", "A"],
  ["A", "T", "C", "G"],
  ["G", "A", "G", "T"],
];

let curDna = dna[dna.length - 1];

for (let i = n - 2; i >= 0; i--) {
  const prevBase = dna[i];
  curDna = dnaTable[dnaOrder[prevBase]][dnaOrder[curDna]];
}

console.log(curDna);
