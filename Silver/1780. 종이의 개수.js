// 문제 번호: 1780번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();
const paper = input.map((el) => el.split(" "));

function solution(n, paper) {
  let answer = [0, 0, 0];

  function recursion(sr, sc, size) {
    const target = paper[sr][sc];
    let flag = true;

    for (let i = sr; i < sr + size; i++) {
      for (let j = sc; j < sc + size; j++) {
        if (paper[i][j] !== target) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
    }

    if (flag) {
      answer[+target + 1]++;
    } else {
      const divide = size / 3;
      recursion(sr, sc, divide);
      recursion(sr, sc + divide, divide);
      recursion(sr, sc + divide * 2, divide);
      recursion(sr + divide, sc, divide);
      recursion(sr + divide * 2, sc, divide);
      recursion(sr + divide, sc + divide, divide);
      recursion(sr + divide, sc + divide * 2, divide);
      recursion(sr + divide * 2, sc + divide, divide);
      recursion(sr + divide * 2, sc + divide * 2, divide);
    }
  }

  recursion(0, 0, n);
  return answer.join("\n");
}

console.log(solution(n, paper));
