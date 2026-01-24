// 문제 번호: 10203번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const words = input.slice(1);

for (const word of words) {
    let vowelCount = 0;

    for (const w of word) {
        if ("aeiou".includes(w)) {
            vowelCount++;
        }
    }

    console.log(`The number of vowels in ${word} is ${vowelCount}.`);
}
