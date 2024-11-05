// 문제 번호: 27065번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);
const count = input.shift();
const answer = [];

function sumOfDivisors(n) {
    let sum = 0;

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) sum += i;
    }

    return sum;
}

for (let i = 0; i < count; i++) {
    const n = input[i];
    const divisorSum = sumOfDivisors(n);

    if (divisorSum <= n) {
        answer.push("BOJ 2022");
        continue;
    }

    let allDivisorsValid = true;
    for (let j = 1; j <= Math.floor(n / 2); j++) {
        if (n % j === 0) {
            const divSum = sumOfDivisors(j);

            if (divSum > j) {
                allDivisorsValid = false;
                break;
            }
        }
    }

    if (allDivisorsValid) {
        answer.push("Good Bye");
    } else {
        answer.push("BOJ 2022");
    }
}

console.log(answer.join("\n"));
