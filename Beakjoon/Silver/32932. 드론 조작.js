// 문제 번호: 32932번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [oCount, _] = input[0].split(" ").map(Number);

const oPos = input
    .slice(1, oCount + 1)
    .map((pos) => pos.split(" ").map(Number));

const move = input[input.length - 1];

const curPos = [0, 0];
for (let m of move) {
    newPos = curPos.slice();

    if (m === "U") newPos[1]++;
    else if (m === "R") newPos[0]++;
    else if (m === "L") newPos[0]--;
    else if (m === "D") newPos[1]--;

    const hasObs = oPos.some(
        (pos) => pos[0] === newPos[0] && pos[1] === newPos[1]
    );

    if (!hasObs) {
        curPos[0] = newPos[0];
        curPos[1] = newPos[1];
    }
}

console.log(curPos.join(" "));
