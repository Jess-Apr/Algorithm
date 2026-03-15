// 문제 번호: 10989번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);

const count = new Array(10001).fill(0);
for (let i = 1; i <= n; i++) {
  count[Number(input[i])]++;
}

let result = "";
for (let j = 1; j <= 10000; j++) {
  if (count[j] === 0) continue;

  for (let k = 0; k < count[j]; k++) {
    result += j + "\n";
  }
}

console.log(result);

// 이 문제의 경우 Node.js 제출이 불가하므로,
// Node.js로 먼저 문제를 푼 후 C++로 변환하여 제출
// #include <bits/stdc++.h>
// using namespace std;

// int main() {
//     ios::sync_with_stdio(false);
//     cin.tie(nullptr);

//     int N;
//     cin >> N;

//     int count[10001] = {0};

//     for (int i = 0; i < N; i++) {
//         int x;
//         cin >> x;
//         count[x]++;
//     }

//     for (int i = 1; i <= 10000; i++) {
//         while (count[i]--) {
//             cout << i << '\n';
//         }
//     }

//     return 0;
// }
