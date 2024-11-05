// 문제 번호: 12866번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [num, str] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = [0, 0, 0, 0];

for (let i = 0; i < +num; i++) {
    if (str[i] === "A") {
        arr[0]++;
    } else if (str[i] === "C") {
        arr[1]++;
    } else if (str[i] === "G") {
        arr[2]++;
    } else {
        arr[3]++;
    }
}

const answer =
    arr.reduce((acc, cur) => BigInt(acc) * BigInt(cur)) % BigInt(1000000007);
console.log(String(answer));
