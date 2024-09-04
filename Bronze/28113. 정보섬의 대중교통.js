// 문제 번호: 28113번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const [n, a, b] = input;
if (a === b) {
    console.log("Anything");
} else if (a > b) {
    console.log("Subway");
} else {
    console.log("Bus");
}
