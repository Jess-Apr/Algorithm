// 문제 번호: 1434번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const boxes = input[1].split(" ").map(Number);
const books = input[2].split(" ").map(Number);

let curBox = 0;
let curBook = 0;

while (curBook < m) {
    if (boxes[curBox] >= books[curBook]) {
        boxes[curBox] -= books[curBook];
        curBook++;
        continue;
    }

    curBox++;
}

const answer = boxes.reduce((acc, cur) => acc + cur, 0);

console.log(answer);
