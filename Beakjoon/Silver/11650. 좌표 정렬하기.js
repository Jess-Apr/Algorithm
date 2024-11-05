// 문제 번호: 11650번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const coordinates = input.slice(1).map((el) => el.split(" ").map(Number));

function solution(coordinates) {
  coordinates.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] === b[0]) {
      if (a[1] > b[1]) {
        return 1;
      } else if (a[1] === b[1]) {
        return 0;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });

  return coordinates.map((el) => el.join(" ")).join("\n");
}

console.log(solution(coordinates));
