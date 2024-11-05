// 문제 번호: 2675번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCase = +input.shift();
const data = input.map((el) => el.split(" "));

for (let i = 0; i < testCase; i++) {
  data[i][0] = +data[i][0];
}

function repeat(num, str) {
  const answer = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < num; j++) {
      answer.push(str[i]);
    }
  }

  return answer.join("");
}

for (let i = 0; i < testCase; i++) {
  console.log(repeat(...data[i]));
}
