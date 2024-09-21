// 문제 번호: 21771번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [roomH, roomW] = input.shift().split(" ").map(Number);
const [dogH, dogW, pillowH, pillowW] = input.shift().split(" ").map(Number);

let numP = 0;
for (let i = 0; i < roomH; i++) {
    for (let j = 0; j < roomW; j++) {
        if (input[i][j] === "P") numP++;
    }
}

const sum = pillowH * pillowW;
if (numP < sum) {
    console.log(1);
} else {
    console.log(0);
}
