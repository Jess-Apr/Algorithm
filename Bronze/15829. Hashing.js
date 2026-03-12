// 문제 번호: 15829번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const l = Number(input[0]);
const str = input[1];

const mod = 1234567891n;
const r = 31n;

let answer = 0n;
let pow = 1n;

for (let i = 0; i < l; i++) {
  const letter = BigInt(str.charCodeAt(i) - 96);
  answer = (answer + letter * pow) % mod;
  pow = (pow * r) % mod;
}

console.log(String(answer));
