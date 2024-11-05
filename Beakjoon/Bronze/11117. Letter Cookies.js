// 문제 번호: 11117번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const testCases = Number(input[idx++]);

for (let i = 0; i < testCases; i++) {
    const letters = input[idx++];
    const wordsCount = Number(input[idx++]);
    const words = input.slice(idx, idx + wordsCount);
    idx += wordsCount;

    checkSpell(letters, words);
}

function countLetters(str) {
    const count = {};
    for (const ch of str) {
        count[ch] = (count[ch] || 0) + 1;
    }
    return count;
}

function checkSpell(letters, words) {
    const letterCount = countLetters(letters);

    for (const word of words) {
        const wordCount = countLetters(word);
        let answer = "YES";

        for (const ch in wordCount) {
            if ((letterCount[ch] || 0) < wordCount[ch]) {
                answer = "NO";
                break;
            }
        }

        console.log(answer);
    }
}
