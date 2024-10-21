// 문제 번호: 31844번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");
let { robot, box, dest } = { robot: -1, box: -1, dest: -1 };

for (let i = 0; i < 10; i++) {
    if (input[i] === "@") robot = i;
    else if (input[i] === "#") box = i;
    else if (input[i] === "!") dest = i;
}

if (robot < box && box < dest) {
    console.log(dest - robot - 1);
} else if (dest < box && box < robot) {
    console.log(robot - dest - 1);
} else {
    console.log(-1);
}
