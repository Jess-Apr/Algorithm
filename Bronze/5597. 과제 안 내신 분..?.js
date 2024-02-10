// 문제 번호: 5597번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const nums = input.map(Number);

nums.sort((a, b) => a - b);
nums.unshift(0);
nums.push(31);

for (let i = 1; i < 30; i++) {
  if (nums[i] - nums[i - 1] === 2) console.log(nums[i] - 1);
}
