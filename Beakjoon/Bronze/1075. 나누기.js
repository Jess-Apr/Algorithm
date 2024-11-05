// 문제 번호: 1075번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = +`${input[0]}`.slice(-2);
const f = +input[1];
const sub = +input[0] % f;
let answer = 0;

if (sub > n) {
    answer = n - sub + f;
} else if (sub === n) {
    answer = n - sub;
} else if (sub < n) {
    answer = (n - sub) % f;
}

answer = `${answer}`.length === 1 ? `0${answer}` : answer;
console.log(answer);
