// 문제 번호: 14888번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const numbers = input.shift().split(" ").map(Number);
let [add, sub, mul, div] = input.shift().split(" ").map(Number);

let max = -Infinity;
let min = Infinity;

function dfs(sum, dep) {
  if (dep === n) {
    max = Math.max(max, sum);
    min = Math.min(min, sum);
    return;
  }

  if (add > 0) {
    add--;
    dfs(sum + numbers[dep], dep + 1);
    add++;
  }
  if (sub > 0) {
    sub--;
    dfs(sum - numbers[dep], dep + 1);
    sub++;
  }
  if (mul > 0) {
    mul--;
    dfs(sum * numbers[dep], dep + 1);
    mul++;
  }
  if (div > 0) {
    div--;
    dfs(~~(sum / numbers[dep]), dep + 1);
    div++;
  }
}

dfs(numbers[0], 1);
console.log(`${max}\n${min}`);
