// 문제 번호: 6778번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let [antenna, eyes] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

if (antenna >= 3 && eyes <= 4) {
    console.log("TroyMartian");
}
if (antenna <= 6 && eyes >= 2) {
    console.log("VladSaturnian");
}
if (antenna <= 2 && eyes <= 3) {
    console.log("GraemeMercurian");
}
