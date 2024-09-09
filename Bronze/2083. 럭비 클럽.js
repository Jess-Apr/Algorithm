// 문제 번호: 2083번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const members = input.slice(0, -1).map((person) => person.split(" "));

for (let member of members) {
    if (+member[1] > 17 || +member[2] >= 80) {
        console.log(`${member[0]} Senior`);
    } else {
        console.log(`${member[0]} Junior`);
    }
}
