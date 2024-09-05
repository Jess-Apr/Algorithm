// 문제 번호: 10798번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const longest = Math.max(...input.map((i) => i.length));

let answer = "";
for (let i = 0; i < longest; i++) {
    for (let j = 0; j < 5; j++) {
        if (input[j][i]) answer += input[j][i];
    }
}

console.log(answer);

// 오답노트:
// 단어들을 배열로 바꾼 뒤, 배열의 인덱스로 접근했다.
// 하지만 굳이 배열로 바꾸지 않아도 바로 문자열로 인덱스 접근이 가능하다.
// 배열로 변환하는 과정은 불필요할뿐더러 메모리 측면에서 더욱 비효율적이다.
