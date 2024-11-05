// 문제 번호: 1551번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(",").map(Number);

for (let i = 0; i < k; i++) {
    const newArr = [];
    for (let j = 0; j < arr.length - 1; j++) {
        newArr.push(arr[j + 1] - arr[j]);
    }
    arr = newArr;
}

console.log(arr.join(","));
