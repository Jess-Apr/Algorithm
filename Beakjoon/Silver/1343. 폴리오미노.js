// 문제 번호: 1343번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

let answer = input.replace(/X+/g, (xGroup) => {
    if (xGroup.length % 2) return -1;
    return (
        "AAAA".repeat(Math.floor(xGroup.length / 4)) +
        "BB".repeat((xGroup.length % 4) / 2)
    );
});

if (answer.includes("-1")) answer = "-1";
console.log(answer);
