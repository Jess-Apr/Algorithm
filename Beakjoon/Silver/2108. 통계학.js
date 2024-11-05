// 문제 번호: 2108번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);
const n = input[0];
const nums = input.slice(1);

const OFFSET = 4000;
let sum = 0;
let min = 4001;
let max = -4001;

const arr = new Array(8001).fill(0);
for (let num of nums) {
    sum += num;
    if (num < min) min = num;
    if (num > max) max = num;

    arr[num + OFFSET]++;
}

// 산술평균
const avg = Math.round(sum / n);

// 중앙값
let midCount = 0;
let median = 0;
const midNum = Math.ceil(n / 2);
for (let i = 0; i < 8001; i++) {
    if (arr[i]) {
        midCount += arr[i];
    }

    if (midCount >= midNum) {
        median = i - OFFSET;
        break;
    }
}

// 최빈값
const modeMax = Math.max(...arr);
const modeCandidates = [];
for (let i = 0; i < 8001; i++) {
    if (arr[i] === modeMax) {
        modeCandidates.push(i - OFFSET);
    }
}
modeCandidates.sort((a, b) => a - b);
const mode = modeCandidates.length > 1 ? modeCandidates[1] : modeCandidates[0];

// 범위
const range = max - min;

console.log([avg, median, mode, range].join("\n"));
