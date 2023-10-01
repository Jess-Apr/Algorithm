// 문제 번호: 10828번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
let arr = input.map((el) => el.split(" "));
for (let i of arr) {
  if (i[1]) i[1] = +i[1];
}

function solution(arr) {
  newArr = [];
  answer = [];
  for (let i of arr) {
    switch (i[0]) {
      case "push":
        newArr.push(i[1]);
        break;
      case "pop":
        newArr.length === 0 ? answer.push(-1) : answer.push(newArr.pop());
        break;
      case "size":
        answer.push(newArr.length);
        break;
      case "empty":
        newArr.length === 0 ? answer.push(1) : answer.push(0);
        break;
      case "top":
        newArr.length === 0 ? answer.push(-1) : answer.push(newArr[newArr.length - 1]);
    }
  }

  return answer.join("\n");
}

console.log(solution(arr));
