// 문제 번호: 1992번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = input.map((el) => el.split(""));

function solution(n, arr) {
  let answer = "";

  function recursion(x, y, len) {
    const start = arr[x][y];
    let isSame = true;

    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (arr[i][j] !== start) isSame = false;
      }
    }

    if (isSame) {
      answer += start;
      return;
    } else {
      answer += "(";
      len /= 2;
      recursion(x, y, len);
      recursion(x, y + len, len);
      recursion(x + len, y, len);
      recursion(x + len, y + len, len);
      answer += ")";
    }
  }

  recursion(0, 0, n);
  return answer;
}

console.log(solution(n, arr));
