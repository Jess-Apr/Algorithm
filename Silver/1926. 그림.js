// 문제 번호: 1926번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [h, w] = input.shift().split(" ").map(Number);
const arr = input.slice().map((el) => el.split(" ").map(Number));

let picCount = 0;
let maxArea = 0;
const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

function dfs(y, x) {
    let stack = [[y, x]];
    let curArea = 0;

    while (stack.length) {
        const [cy, cx] = stack.pop();

        if (!arr[cy][cx]) continue;

        arr[cy][cx] = 0;
        curArea++;

        for (let i = 0; i < 4; i++) {
            const newY = cy + dir[i][0];
            const newX = cx + dir[i][1];

            if (newY < 0 || newY >= h || newX < 0 || newX >= w) continue;

            if (arr[newY][newX]) stack.push([newY, newX]);
        }
    }

    if (curArea > maxArea) maxArea = curArea;
}

for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
        if (arr[i][j]) {
            picCount++;
            dfs(i, j);
        }
    }
}

console.log(`${picCount}\n${maxArea}`);
