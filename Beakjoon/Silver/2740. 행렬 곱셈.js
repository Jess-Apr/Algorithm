// 문제 번호: 2740번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const firstMatrixSize = input.shift().split(" ").map(Number);
const firstMatrix = input
    .splice(0, firstMatrixSize[0])
    .map((it) => it.split(" ").map(Number));
const secondMatrixSize = input.shift().split(" ").map(Number);
const secondMatrix = input
    .splice(0, secondMatrixSize[0])
    .map((it) => it.split(" ").map(Number));
const newMatrix = Array.from(Array(firstMatrixSize[0]), () =>
    Array(secondMatrixSize[1]).fill(0)
);

for (let i = 0; i < firstMatrixSize[0]; i++) {
    for (let j = 0; j < secondMatrixSize[1]; j++) {
        for (let k = 0; k < firstMatrixSize[1]; k++) {
            newMatrix[i][j] += firstMatrix[i][k] * secondMatrix[k][j];
        }
    }
}
console.log(newMatrix.map((it) => it.join(" ")).join("\n"));
