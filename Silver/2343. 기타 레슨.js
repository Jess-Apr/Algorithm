// 문제 번호: 2343번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [_, M] = input.shift().split(" ").map(Number);
const lectures = input.shift().split(" ").map(Number);

function binarySearch() {
    let left = Math.max(...lectures);
    let right = lectures.reduce((a, b) => a + b, 0);

    let result = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let count = 1;
        let sum = 0;

        for (const len of lectures) {
            if (sum + len > mid) {
                count++;
                sum = 0;
            }

            sum += len;
        }

        if (count <= M) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

binarySearch();
console.log(binarySearch());
