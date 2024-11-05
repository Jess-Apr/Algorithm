// 문제 번호: 2798번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = +input[0].split(" ")[1];
const cards = input[1].split(" ").map(Number);

// 백트래킹을 사용한 풀이
// function solution(num, cards) {
//   const arr = [];
//   const tmp = [];

//   function dfs(cur, len) {
//     if (len === 3) {
//       let sum = tmp.reduce((acc, cur) => acc + cur);
//       if (sum <= num) arr.push(sum);
//     } else {
//       for (let i = cur; i < cards.length; i++) {
//         tmp[len] = cards[i];
//         dfs(i + 1, len + 1);
//       }
//     }
//   }

//   dfs(0, 0);

//   return Math.max(...arr);
// }

// 중첩 반복문 (브루트포스 알고리즘)을 사용한 풀이
function solution(num, cards) {
  const answer = [];

  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        let sum = cards[i] + cards[j] + cards[k];
        if (sum <= num) answer.push(sum);
      }
    }
  }

  return Math.max(...answer);
}

console.log(solution(num, cards));
