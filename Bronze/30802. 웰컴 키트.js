// 문제 번호: 30802번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const size = input[1].split(" ").map((s) => Number(s));
const [T, P] = input[2].split(" ").map((s) => Number(s));

let t = 0;
for (s of size) {
    t += Math.ceil(s / T);
}

const bundle = Math.floor(n / P);
const single = n % P;

console.log(`${t}\n${bundle} ${single}`);
