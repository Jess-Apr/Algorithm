// 문제 번호: 2630번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();
const paper = input.map((el) => el.split(" "));

function solution(n, paper) {
  let white = 0;
  let blue = 0;

  function recursion(sr, sc, size) {
    const flat = paper
      .slice(sr, sr + size)
      .map((el) => el.slice(sc, sc + size))
      .flat(Infinity);

    if (flat.includes("0") && !flat.includes("1")) {
      white++;
    } else if (flat.includes("1") && !flat.includes("0")) {
      blue++;
    } else {
      recursion(sr, sc, size / 2);
      recursion(sr, sc + size / 2, size / 2);
      recursion(sr + size / 2, sc, size / 2);
      recursion(sr + size / 2, sc + size / 2, size / 2);
    }
  }

  recursion(0, 0, n);
  return [white, blue].join("\n");
}

console.log(solution(n, paper));
