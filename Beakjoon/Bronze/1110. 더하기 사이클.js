// 문제 번호: 1110번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function addingCycle(num) {
    const first = num.padStart(2, "0");

    const add = Number(first[0]) + Number(first[1]);
    const second = add.toString().padStart(2, "0");

    return first[1] + second[1];
}

let curNum = input;
let cycle = 0;

while (!cycle || +curNum !== +input) {
    curNum = addingCycle(curNum);
    cycle++;
}

console.log(cycle);
