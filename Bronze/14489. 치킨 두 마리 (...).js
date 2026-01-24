// 문제 번호: 14489번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [money, price] = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = money.split(" ").map(Number);
const c = Number(price);

if (a + b >= 2 * c) {
    console.log(a + b - 2 * c);
} else {
    console.log(a + b);
}
