// 문제 번호: 23882번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [arraySize, exchangeCount] = input.shift().split(" ").map(Number);
const array = input[0].split(" ").map(Number);

let pointer = arraySize - 1;
while (exchangeCount > 0) {
    const largest = Math.max(...array.slice(0, pointer));

    if (largest > array[pointer]) {
        const index = array.indexOf(largest);
        const last = array[pointer];
        array[pointer] = largest;
        array[index] = last;
        exchangeCount--;
    }

    pointer--;

    if (pointer === 0) {
        if (exchangeCount === 0) break;
        else {
            console.log("-1");
            return;
        }
    }
}

console.log(array.join(" "));
