// 문제 번호: 26560번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const sentences = input.slice(1);

for (let sentence of sentences) {
    const answer =
        sentence[sentence.length - 1] === "." ? sentence : sentence + ".";
    console.log(answer);
}
