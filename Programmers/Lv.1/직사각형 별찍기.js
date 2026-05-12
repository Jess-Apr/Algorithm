const data = require("./example");

const [a, b] = data.trim().split(" ").map(Number);
let answer = [];

for (let i = 0; i < b; i++) {
  answer.push("*".repeat(a));
}

console.log(answer.join("\n"));
