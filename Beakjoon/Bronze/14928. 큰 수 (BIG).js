// 문제 번호: 14928번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();

const answer = BigInt(input) % BigInt(20000303);
console.log(String(answer));
