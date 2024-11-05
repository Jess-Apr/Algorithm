// 문제 번호: 2523번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath);
const n = Number(input);

for (let i = 1; i <= 2 * n - 1; i++) {
    const str = "*";
    const repeatNum = i < n ? i : 2 * n - i;
    console.log(str.repeat(repeatNum));
}
