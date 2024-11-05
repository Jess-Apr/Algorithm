// 문제 번호: 5355번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let [, ...exp] = fs.readFileSync(filePath).toString().trim().split("\n");

const answers = [];

for (const e of exp) {
    const [first, ...operators] = e.split(" ");
    let result = Number(first);

    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case "@":
                result *= 3;
                break;
            case "%":
                result += 5;
                break;
            case "#":
                result -= 7;
                break;
        }
    }

    answers.push(result.toFixed(2));
}

console.log(answers.join("\n"));
