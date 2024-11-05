// 문제 번호: 20115번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const drinks = input[0].split(" ").map(Number);

function solution(drinks) {
  let energyDrink = Math.max(...drinks);
  drinks.splice(drinks.indexOf(energyDrink), 1);

  for (let drink of drinks) {
    energyDrink += drink / 2;
  }

  return energyDrink;
}

console.log(solution(drinks));
