// 문제 번호: 28702번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = 0;
for (let i = 0; i < 3; i++) {
  const str = Number(input[i]);

  if (!isNaN(str)) {
    num = str + (3 - i);
    break;
  }
}

const isThreeMultiple = !(num % 3);
const isFiveMultiple = !(num % 5);

if (isThreeMultiple && isFiveMultiple) {
  console.log("FizzBuzz");
} else if (isThreeMultiple) {
  console.log("Fizz");
} else if (isFiveMultiple) {
  console.log("Buzz");
} else {
  console.log(num);
}
