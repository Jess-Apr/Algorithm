// 문제 번호: 31403번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [first, second, third] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(Number(first) + Number(second) - Number(third))
console.log(first + second - third)