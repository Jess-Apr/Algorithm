// 문제 번호: 2231번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);

// 각 자릿수의 최대 합은 자릿수 * 9이기 때문에, 어떤 자연수의 생성자는 (자연수 - 자릿수 * 9)보다 클 수 없다.
// 예: 세자리 수의 경우 가능한 가장 큰 생성자는 999이다.
//    999의 분해합은 999 + 9 + 9 + 9이기 때문에 어떤 수이든 생성자가 (세자리수 자연수 - 9 * 3)보다 클 수 없다.
// 숫자가 한자릿수의 경우 음수가 나올수도 있기 때문에 1과 (자연수 - 자릿수 * 9) 중 더 큰 수로 시작점을 잡는다.
const start = Math.max(1, n - String(n).length * 9);

for (let i = start; i < n; i++) {
  let sum = i;
  let num = i;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  if (sum === n) {
    console.log(i);
    return;
  }
}

console.log(0);
