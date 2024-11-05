// 문제 번호: 7795번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const testCases = [];
while (input.length > 0) {
  testCases.push(input.slice(1, 3));
  input.splice(0, 3);
}

// 처음 풀었던 풀이 (696ms)
// function solution(a, b) {
//   let count = 0;
//   const max = Math.max(...b);

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === 1) continue;
//     if (a[i] > max) {
//       count += b.length;
//       continue;
//     }

//     for (let j = 0; j < b.length; j++) {
//       if (a[i] > b[j]) continue;
//       else if (a[i] <= b[j]) {
//         count += j;
//         break;
//       }
//     }
//   }

//   return count;
// }

// 이중 포인터 방법으로 푼 풀이 (296ms)
function solution(a, b) {
  let count = 0;
  let n = 0;
  let m = 0;

  while (n < a.length) {
    if (a[n] > b[m]) {
      if (m < b.length) m++;
    } else {
      count += m;
      n++;
    }
  }

  return count;
}

for (let testCase of testCases) {
  a = testCase[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  b = testCase[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(solution(a, b));
}
